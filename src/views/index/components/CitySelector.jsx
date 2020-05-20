import React, {useState, useMemo, useEffect, memo} from 'react';
import '../asset/css/component/CitySelector.scss'
import PropTypes from "prop-types";
import {CloseCircleOutlined} from '@ant-design/icons'

const SelectorItem = memo(function SelectorItem(props) {
    const {city, onSelect} = props;
    return (
        <li className={`selectorLi`} onClick={() => {
            onSelect(city)
        }}>{city}</li>
    )
});
SelectorItem.propTypes = {
    city: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

const SelectorSection = memo(function SelectorSection(props) {
    const {cities, onSelect, title} = props;
    return (
        <ul className={`selectorSection`}>
            <li className="sectionTitle" data-id={title}>{title}</li>
            {cities.result.map((city, index) =>
                <SelectorItem city={city.key} onSelect={onSelect} key={index}/>
            )}
        </ul>
    )
});
SelectorSection.propTypes = {
    cities: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

const CityList = memo(function CityList(props) {
    const {cityList, onSelect} = props;
    const keys = Object.keys(cityList) || [];
    return (
        <div className={`cityList`}>
            {
                keys.map((key, index) =>
                    <SelectorSection title={key.toUpperCase()} onSelect={onSelect} cities={cityList[key]} key={index}/>
                )
            }
        </div>
    )
});
CityList.propTypes = {
    cityList: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
};

const CitySearchSelectorList = memo(function CitySearchSelectorList(props) {
    const {searchList, onSelect, clearState} = props;
    return (
        <div className="searchListCtn">
            <ul className="searchList">
                {
                    searchList.map((item, index) =>
                        <li className="searchItem" onClick={() => {
                            onSelect(item.key);
                            clearState()
                        }} key={index}>{item.display}</li>
                    )
                }
            </ul>
        </div>
    )
});
CitySearchSelectorList.propTypes = {
    searchList: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    clearState: PropTypes.func.isRequired
};

function AlphaList(props) {
    const {onSelect} = props;
    const list = Array.from(new Array(26), (item, i) => String.fromCharCode((65 + i)));
    return (
        <ul className="alphaList">
            {
                list.map((item) => <li onClick={() => {
                    onSelect(item)
                }} className="alphaItem" key={item}>{item}</li>)
            }
        </ul>
    )
}

function CitySelector(props) {
    const {
        show,
        cityData,
        hideCitySelector,
        fetchCityList,
        onSelect
    } = props;
    const [searchKey, setSearchKey] = useState('');
    const [searchShow, setSearchShow] = useState(false);
    const [searchListData, setSearchListData] = useState([]);
    useEffect(() => {
        fetchCityList()
    }, []);
    let key = useMemo(() => {
        return searchKey.trim()
    }, [searchKey]) || '';

    // 获取搜索数据
    useEffect(() => {
        if (!key) {
            setSearchShow(false);
            return
        }
        setSearchShow(true);
        fetch('http://localhost:23333/cityList/search?initial=' + key)
            .then(res => res.json())
            .then(response => {
                console.log(84, response)
                const data = response.data;
                setSearchListData(data)
            })
            .catch(err => console.log(err))
    }, [key]);

    function clearState() {
        setSearchKey('');
        setSearchShow(false);
        setSearchListData([])
    }

    const alphaClick = function (dataId) {
        console.log(document.querySelector(`[data-id="${dataId}"]`));
        document.querySelector(`[data-id="${dataId}"]`).scrollIntoView()
    };

    if (show) {
        return (
            <div className={`citySelectorCtn`}>
                <div className="headerCtn">
                    <button className={`backBtn`} onClick={hideCitySelector}>
                        <svg width={42} height={42}>
                            <polyline
                                points={`25,12 16,21 25,29`}
                                stroke={`#fff`}
                                strokeWidth={`2`}
                                fill={`none`}
                            />
                        </svg>
                    </button>
                    <input
                        type="text"
                        className="citySelectorSearchInput"
                        value={searchKey}
                        onChange={(e) => {
                            setSearchKey(e.target.value)
                        }}
                        placeholder={`请输入城市名称、拼音`}/>
                    <button
                        className={`clearBtn ${key.length > 0 ? '' : 'hidden'}`}
                        onClick={() => {
                            setSearchKey('');
                            setSearchShow(false);
                        }}>
                        <CloseCircleOutlined/>
                    </button>
                </div>
                <div className={`cityListCtn ${searchShow ? 'hidden' : ''}`}>
                    <CityList cityList={cityData} onSelect={onSelect}/>
                    <AlphaList onSelect={alphaClick}/>
                </div>
                <div className={`searchListCtn ${!searchShow ? 'hidden' : ''}`}>
                    <CitySearchSelectorList clearState={clearState} searchList={searchListData} onSelect={onSelect}/>
                </div>

            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }

}

export default CitySelector;

CitySelector.propTypes = {
    hideCitySelector: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    cityData: PropTypes.object,
    fetchCityList: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
};