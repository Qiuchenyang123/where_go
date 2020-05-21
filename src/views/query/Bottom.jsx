import React, {Component} from 'react';
import './asset/css/query/Bottom.scss'

function FilterLayer(props) {
    return (
        <div className="filterLayerCtn"></div>
    )
}
function Bottom(props) {
    return (
        <div className={`bottomCtn`}>
            <ul className="bottomBtnList">
                <li className="bottomBtnItem">
                    <i className={`btnIcon iconTime`}></i>
                    <span className={`btnTxt`}>时间 早→晚</span>
                </li>
                <li className="bottomBtnItem">
                    <i className={`btnIcon iconSubway`}></i>
                    <span className={`btnTxt`}>只看高铁动车</span>
                </li>
                <li className="bottomBtnItem">
                    <i className={`btnIcon iconTicket`}></i>
                    <span className={`btnTxt`}>只看有票</span>
                </li>
                <li className="bottomBtnItem">
                    <i className={`btnIcon iconFilter`}></i>
                    <span className={`btnTxt`}>综合筛选</span>
                </li>
            </ul>
            <div className="filterLayerWrap"></div>
        </div>
    )
}

export default Bottom;