import React, {} from 'react';
import TicketInfo from "./TicketInfo";
import Header from "../ticket/components/Header";
import AddSeat from "./AddSeat";
function Order(props) {
    const onBack = function () {
        window.location.go(-1)
    }
    return (
        <div className="orderCtn">
            <Header onBack={onBack} title={`订单填写`}/>
            {/*<TicketInfo/>*/}
            <AddSeat/>
        </div>
    )
}

export default Order;