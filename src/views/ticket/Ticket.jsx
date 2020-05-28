import React, {useEffect, useState, useCallback, useMemo} from 'react';
import Header from "./components/Header";
import Nav from "./Nav";
import './asset/css/ticket/Ticket.scss'
import TicketInfo from "./TicketInfo";
import PurchaseSuspense from "./PurchaseSuspense";
import HodometerLayer from "./HodometerLayer";
import {
    fetchSchemaData,
    showTicketSchemaLayer,
    hideTicketSchemaLayer,
} from './actions/ticketActions';
import {bindActionCreators} from 'redux'

function Ticket(props) {
    const {
        ticketSchemaLayerVisible,
        ticketSchemaData,
        dispatch
    } = props;
    const [ticketInfo, setTicketInfo] = useState(JSON.parse(localStorage.getItem('cache_ticket_info')));
    function onBack() {
        window.history.go(-1)
    }
    const ticketInfoCbs = useMemo(() => {
        return bindActionCreators({
            showTicketSchemaLayer,
            hideTicketSchemaLayer
        }, dispatch)
    }, []);
    const hodometerCbs = useMemo(() => {
        return bindActionCreators({
            showTicketSchemaLayer,
            hideTicketSchemaLayer,
        }, dispatch)
    }, []);
    useEffect(() => {
        dispatch(fetchSchemaData())
    }, []);
    return (
        <div className={`ticketCtn`}>
            <Header onBack={onBack} title={`123`}/>
            {/*<Nav/>*/}
            <TicketInfo
                ticketDetail={ticketInfo.detail}
                {...ticketInfoCbs}/>
            <HodometerLayer
                ifShow={ticketSchemaLayerVisible}
                hodometerData={ticketSchemaData}
                {...hodometerCbs}/>
            <PurchaseSuspense purchaseCandidates={ticketInfo.candidates}/>
        </div>
    );
}

export default Ticket;