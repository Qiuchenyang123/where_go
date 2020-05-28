import React, {useMemo} from 'react';
import dayJs from 'dayjs'
import './asset/css/order/TicketInfo.scss'

function TicketInfo(props) {
    const {
        ticketDetail,
        showTicketSchemaLayer,
    } = props;
    const time = useMemo(() => {
        return dayJs(new Date(parseInt(ticketDetail.arriveDate, 10))).format('YYYY-MM-DD') +
            ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][new Date(parseInt(ticketDetail.arriveDate, 10)).getDay()]
    }, [ticketDetail.arriveDate]);
    return (
        <div className="ticketDetailCtn">
            <div className="leftPartCtn">
                <p className="stationTxt">{ticketDetail.from}</p>
                <p className="timeTxt">{ticketDetail.departTimeStr}</p>
                <p className="dateTxt">{time}</p>
            </div>
            <div className="centerPartCtn">
                <p className="normalTxt">{1}</p>
                <p onClick={() => {showTicketSchemaLayer()}} className="timeChartTxt">时刻表</p>
                <p className="normalTxt">{ticketDetail.durationStr}</p>
            </div>
            <div className="rightPartCtn">
                <p className="stationTxt">{ticketDetail.to}</p>
                <p className="timeTxt">{ticketDetail.arriveTimeStr}</p>
                <p className="dateTxt">{time}</p>
            </div>
        </div>
    )
}

export default TicketInfo;