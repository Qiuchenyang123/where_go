import React from 'react';
import './asset/css/index/Journey.scss'
import PropTypes from "prop-types";
import {SwapOutlined} from '@ant-design/icons';
function Journey(props) {
    const {
        from,
        to,
        showCitySelector,
        exchangeFromTo
    } = props;
    return (
        <div className={`journeyWrap`}>
            <div className="cityCtn" onClick={() => {showCitySelector(true)}}>
                <input type="text" className={`cityInput`} readOnly={true} value={from}/>
            </div>
            <button className="toggleBtn" type={`button`} onClick={() => {exchangeFromTo()}}>
                <SwapOutlined />
            </button>
            <div className="cityCtn" onClick={() => {showCitySelector(false)}}>
                <input type="text" className={`cityInput`} readOnly={true} value={to}/>
            </div>
        </div>
    )
}

export default Journey;

Journey.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    showCitySelector: PropTypes.func.isRequired,
    exchangeFromTo: PropTypes.func.isRequired
};