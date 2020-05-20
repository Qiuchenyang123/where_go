import React, {useMemo, useState, useEffect} from 'react';
import PropTypes from "prop-types";
import dayJs from "dayjs";
import {RightOutlined} from "@ant-design/icons";
import TimeSelector from "./components/TimeSelector";

import './asset/css/index/DepartDate.scss'
import {h0} from './utils/fp'


function DepartDate(props) {
    const {
        departDate,
        isDateSelectorVisible,
        showDateSelector,
        hideDateSelector,
        setDepartDate
    } = props;
    const currentDay = h0(departDate);
    const today = h0();
    const isToday = currentDay === today;
    const WeekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const [today_day, setToday_day] = useState('周一');
    const [monthArr, setMonthArr] = useState([]);

    const currentTime_display = useMemo(() => {
        const time = new Date(currentDay);
        setMonthArr([time.getMonth() + 1, time.getMonth() + 2, time.getMonth() + 3]);
        setToday_day(WeekArr[time.getDay()]);
        return dayJs(currentDay).format('YYYY-MM-DD')
    }, [currentDay]);
    return (
        <div className={`departDateCtn`}>
            <p className="dateTxt" onClick={showDateSelector}>
                {currentTime_display}
                <span className={`weekTxt`}>{today_day}</span>
                {isToday ? <span className={`todayTxt`}>(今天)</span> : ''}
                <span className={`iconTxt`}>
                    <RightOutlined />
                </span>
            </p>
            <TimeSelector
                show={isDateSelectorVisible}
                months={monthArr}
                onSelect={(date) => {
                    hideDateSelector();
                    setDepartDate(date)
                }}
                onBack={hideDateSelector}/>
        </div>
    );
}

export default DepartDate;

DepartDate.propTypes = {
    departDate: PropTypes.string.isRequired,
    isDateSelectorVisible: PropTypes.bool.isRequired,
    showDateSelector: PropTypes.func.isRequired,
    hideDateSelector: PropTypes.func.isRequired,
    setDepartDate: PropTypes.func.isRequired,
};