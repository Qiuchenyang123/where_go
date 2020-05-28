import React, {useMemo} from 'react';
import './asset/css/ticket/Nav.scss'
import dayJs from 'dayjs'

function Nav(props) {
    const {
        departDate,
        setFormerDay,
        setLaterDay
    } = props;
    const dateStr = useMemo(() => {
        const date = dayJs(parseInt(departDate)).format('YYYY-MM-DD');
        const day = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][new Date(parseInt(departDate)).getDay()];
        return date + ' ' + day
    }, [departDate]);
    return (
        <div className={`navCtn`}>
            <button className={`sideBtn`} onClick={() => {setFormerDay()}}>前一天</button>
            <span className={`dateTxt`}>{dateStr}</span>
            <button className={`sideBtn`} onClick={() => {setLaterDay()}}>后一天</button>
        </div>
    )
}

export default Nav;