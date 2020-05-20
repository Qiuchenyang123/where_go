import React, {useMemo, useCallback, useState, useEffect} from 'react';
import '../asset/css/component/TimeSelector.scss'
import Header from "./Header";
import dayJs from "dayjs";

import {h0} from "../utils/fp";

function Day(props) {
    const {day, onSelect} = props;
    const dayTime = day ? new Date(day) : '';
    const dayStr = dayTime ? dayTime.getDate() : '';
    const ifWeekend = dayTime ? (dayTime.getDay() === 0 || dayTime.getDay() === 6) : false;
    return (
        <td className={ifWeekend ? 'weekend' : 'weekday'} onClick={() => {
            if (!day) return;
            onSelect(day)
        }}>{dayStr}</td>
    )
}
function Week(props) {
    const {week, onSelect} = props;
    return (
        <tr>
            {
                week.map((day, index) => <Day day={day} onSelect={onSelect} key={index}/>)
            }
        </tr>
    )
}

function Month(props) {
    const {month, onSelect} = props;
    let days = [];
    const weeks = [];
    function getDays(time, month, first) {
        if (first) {
            time = new Date();
            time.setMonth(month - 1);
            time.setDate(1);
            const firstDay = time.getDay();
            if (firstDay > 0) {
                days = Array(firstDay - 1).fill(null).concat(days)
            } else {
                days = Array(6).fill(null).concat(days)
            }
            time = h0(time);
        }
        days.push(time);
        time = new Date(time);
        time.setDate(time.getDate() + 1);
        if (time.getMonth() + 1 === month) {
            getDays(time.getTime(), month)
        } else {
            const lastDay = time.getDay() - 1;
            if (lastDay > 0) {
                days = days.concat(Array(7 - lastDay).fill(null));
            }
        }
    }
    function initWeeks(days) {
        for (let i = 0, length = days.length / 7; i < length; i++) {
            weeks.push(Array.from(new Array(7), (item, index) => {
                return days[i * 7 + index]
            }))
        }
    }
    const [stateWeeks, setStateWeeks] = useState(weeks);
    useMemo(() => {
        getDays('', month, true);
        initWeeks(days);
        setStateWeeks(weeks)
    }, [month]);

    return (
        <div className="monthCtn">
            <p className="monthTitle">{month}月</p>
            <table className={`timeTable`}>
                <thead>
                    <tr>
                        <th>周一</th>
                        <th>周二</th>
                        <th>周三</th>
                        <th>周四</th>
                        <th>周五</th>
                        <th className={`weekend`}>周六</th>
                        <th className={`weekend`}>周日</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stateWeeks.map((week, index) =>
                            <Week week={week} key={index} onSelect={onSelect}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
function TimeSelector(props) {
    const {onBack, months, onSelect, show} = props;
    return (
        <div className={`timeSelectorCtn ${show ? '' : 'hidden'}`}>
            <Header title={`时间选择`} onBack={onBack}/>
            {
                months.map((month, index) => <Month month={month} onSelect={onSelect} key={index}/>)
            }
        </div>
    );
}

export default TimeSelector;