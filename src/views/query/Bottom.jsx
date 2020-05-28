import React, {useState, useMemo, useEffect, useRef} from 'react';
import './asset/css/query/Bottom.scss'
import useWinSize from "./utils/useWinSize";

function Slider(props) {
    const {
        title,

    } = props;
    const [departStartTime, setDepartStartTime] = useState(0);
    const [departEndTime, setDepartEndTime] = useState(24);
    const winSize = useWinSize();
    const leftRadiusPercent = useMemo(() => {
        let result = Math.round(departStartTime / 24 * 100);
        if (result > 100) return 100;
        if (result < 0) return 0;
        return result
    }, [departStartTime]);
    const rightRadiusPercent = useMemo(() => {
        let result = Math.round(departEndTime / 24 * 100);
        if (result > 100) return 100;
        if (result < 0) return 0;
        return result
    }, [departEndTime]);
    const departStartTimeStr = useMemo(() => {
        return departStartTime + ':00'
    }, [departStartTime]);
    const departEndTimeStr = useMemo(() => {
        return departEndTime + ':00'
    }, [departEndTime]);
    const leftRadius = useRef();
    const rightRadius = useRef();
    const leftRadiusLastX = useRef();
    const rightRadiusLastX = useRef();
    const bgBar = useRef();
    const bgBarWidth = useRef();
    function leftRadiusTouchStartHandle(e) {
        const touch = e.targetTouches[0];
        leftRadiusLastX.current = touch.pageX
    }
    function leftRadiusTouchMoveHandle(e) {
        const touch = e.targetTouches[0];
        const distance = touch.pageX - leftRadiusLastX.current;
        // bgBarWidth.current = parseFloat(window.getComputedStyle(bgBar.current).width);
        let startTime = Math.round(distance / bgBarWidth.current * 24);
        startTime = startTime > departEndTime ? departEndTime : startTime < 0 ? 0 : startTime;
        setDepartStartTime(startTime);
    }
    function rightRadiusTouchStartHandle(e) {
        const touch = e.targetTouches[0];
        rightRadiusLastX.current = touch.pageX
    }
    function rightRadiusTouchMoveHandle(e) {
        const touch = e.targetTouches[0];
        const distance = rightRadiusLastX.current - touch.pageX;
        // bgBarWidth.current = parseFloat(window.getComputedStyle(bgBar.current).width);
        // console.log(59, bgBarWidth.current)
        let endTime = Math.round((1 - distance / bgBarWidth.current) * 24);
        endTime = endTime < departStartTime ? departStartTime : endTime > 24 ? 24 : endTime
        setDepartEndTime(endTime);
    }
    useEffect(() => {
        leftRadius.current.addEventListener(
            'touchstart',
            leftRadiusTouchStartHandle,
            false
        );
        leftRadius.current.addEventListener(
            'touchmove',
            leftRadiusTouchMoveHandle,
            false
        );
        rightRadius.current.addEventListener(
            'touchstart',
            rightRadiusTouchStartHandle,
            false
        );
        rightRadius.current.addEventListener(
            'touchmove',
            rightRadiusTouchMoveHandle,
            false
        );
        return () => {
            leftRadius.current.removeEventListener(
                'touchstart',
                leftRadiusTouchStartHandle,
                false
            );
            leftRadius.current.removeEventListener(
                'touchmove',
                leftRadiusTouchMoveHandle,
                false
            );
            rightRadius.current.removeEventListener(
                'touchstart',
                rightRadiusTouchStartHandle,
                false
            );
            rightRadius.current.removeEventListener(
                'touchmove',
                rightRadiusTouchMoveHandle,
                false
            );
        }
    });
    useEffect(() => {
        bgBarWidth.current = document.documentElement.clientWidth * parseFloat(window.getComputedStyle(bgBar.current).width) / 100;
        // bgBarWidth.current = parseFloat(bgBar.current.getBoundingClientRect().width);
        console.log(39, bgBarWidth.current);
    }, [winSize.width]);

    return (
        <div className="sliderCtn">
            <p className="sliderTitle">{title}</p>
            <div ref={bgBar} className="sliderContent">
                <div className="bgBar"></div>
                <div className="selectedBar" style={{left: leftRadiusPercent + '%', width: `calc(${rightRadiusPercent - leftRadiusPercent}%)`}}></div>
                <div ref={leftRadius} className="radius leftRadius" style={{left: leftRadiusPercent + '%'}}>
                    <span className="tipTxt">{departStartTimeStr}</span>
                </div>
                <div ref={rightRadius} className="radius rightRadius" style={{left: rightRadiusPercent + '%'}}>
                    <span className="tipTxt">{departEndTimeStr}</span>
                </div>
            </div>
        </div>
    )
}

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
    const {
        hideFilterLayer
    } = props;
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
                    <button onClick={() => {hideFilterLayer()}} className={`topBtn`}>取消</button>
                    <button onClick={() => {hideFilterLayer()}} className={`topBtn fr`}>确定</button>
                </div>
                <TypesBtnGroup
                    title={`车票类型`}
                    itemTypes={ticketsType}/>
                <TypesBtnGroup
                    title={`动车类型`}
                    itemTypes={tranType}/>
                <Slider/>
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