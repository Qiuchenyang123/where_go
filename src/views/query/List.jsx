import React, {useEffect} from 'react';
import './asset/css/query/List.scss'

function TicketLi(props) {
    const {
        ticket,
        selectTicket
    } = props;
    return (
        <li className={`listItem`} onClick={() => {selectTicket(ticket)}}>
            <div className="leftCtn">
                <p className="stationTxt">{ticket.detail.from}</p>
                <p className="timeTxt">{ticket.detail.departTimeStr}</p>
            </div>
            <div className="centerCtn">
                <p className="descTxt">
                    {ticket.candidates[0].type}
                    <span className="priceTxt">
                        {' ￥' + ticket.candidates[0].priceMsg}
                    </span>
                </p>
                <i className={`arrowIcon`}/>
                <p className="durationTxt">
                    {ticket.detail.durationStr}
                </p>
            </div>
            <div className="rightCtn">
                <p className="stationTxt">{ticket.detail.to}</p>
                <p className="timeTxt">{ticket.detail.arriveTimeStr}</p>
            </div>
        </li>
    )
}
function List(props) {
    const {
        ticketListData,
        selectTicket
    } = props;
    return (
        <ul className={`listCtn`}>
            {ticketListData.map((ticket, index) => <TicketLi ticket={ticket} key={index} selectTicket={selectTicket}/>)}
        </ul>
    )
}

export default List;