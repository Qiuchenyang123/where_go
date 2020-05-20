import React from 'react';
import PropTypes from "prop-types";
import '../asset/css/component/Header.scss'

function Header(props) {
    const {
        onBack,
        title,
    } = props;
    return (
        <div className={`header`}>
            <button type={`button`} className={`header_back_btn`} onClick={onBack}>
                <svg width={`42`} height={`42`}>
                    <polyline
                        points={`25,13 16,21 25,29`}
                        stroke={`#fff`}
                        strokeWidth={`2`}
                        fill={`none`}
                    />
                </svg>
            </button>
            <h1>{title}</h1>
        </div>
    )
}

export default Header;

Header.propTypes = {
    onBack: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};