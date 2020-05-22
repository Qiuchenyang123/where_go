import React, {useMemo} from 'react';
import './asset/css/query/Bottom.scss'
import {hideFilterLayer} from "./actions/queryActions";

function TypesBtnGroup(props) {
    const {
        title,
        itemTypes,
        selectHandle
    } = props;
    return (
        <ul className="itemTypesCtn">
            <li className={`itemTypesHeader`}>{title}</li>
            {itemTypes.map((item, index) =>
                <li
                    className={`itemTypeBtn`}
                    key={index}
                    onClick={() => {
                        selectHandle(item.key)
                    }}>{item.label}</li>
            )}
        </ul>
    )
}

function FilterLayer(props) {
    const ticketsType = useMemo(() => {
        return [
            {
                label: '二等座',
                key: 'secondClass'
            }, {
                label: '一等座',
                key: 'firstClass'
            }, {
                label: '商务座',
                key: 'businessClass'
            }, {
                label: '站票',
                key: 'standingTicket'
            }
        ]
    }, []);
    const tranType = useMemo(() => {
        return [
            {
                label: 'G-高铁动车',
                key: 'GSeries'
            }, {
                label: 'D-动车组',
                key: 'DSeries'
            }, {
                label: 'Z-直达特快',
                key: 'ZSeries'
            }, {
                label: 'T-空调特快',
                key: 'TSeries'
            }, {
                label: 'K-快速',
                key: 'KSeries'
            }
        ]
    }, []);
    return (
        <div className="filterLayerShadow">
            <div className="filterLayerCtn">
                <div className="topBtnCtn">
                    <button className={`topBtn`}>取消</button>
                    <button className={`topBtn fr`}>确定</button>
                </div>
                <TypesBtnGroup
                    title={`车票类型`}
                    itemTypes={ticketsType}/>
                <TypesBtnGroup
                    title={`动车类型`}
                    itemTypes={tranType}/>
            </div>
        </div>
    )
}

function Bottom(props) {
    const {
        filterLayerVisible,
        showFilterLayer,
        hideFilterLayer,
    } = props;
    return (
        <div className={`bottomCtn`}>
            <ul className="bottomBtnList">
                <li className="bottomBtnItem">
                    <i className={`btnIcon iconTime`}/>
                    <span className={`btnTxt`}>时间 早→晚</span>
                </li>
                <li className="bottomBtnItem">
                    <i className={`btnIcon iconSubway`}/>
                    <span className={`btnTxt`}>只看高铁动车</span>
                </li>
                <li className="bottomBtnItem">
                    <i className={`btnIcon iconTicket`}/>
                    <span className={`btnTxt`}>只看有票</span>
                </li>
                <li className="bottomBtnItem" onClick={() => {showFilterLayer()}}>
                    <i className={`btnIcon iconFilter`}/>
                    <span className={`btnTxt`}>综合筛选</span>
                </li>
            </ul>
            <div className={`filterLayerWrap ${filterLayerVisible ? '' : 'hidden'}`}>
                <FilterLayer
                    hideFilterLayer={hideFilterLayer}/>
            </div>
        </div>
    )
}

export default Bottom;