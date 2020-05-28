import React, {useEffect, useMemo, useCallback} from 'react';
import Header from "./components/Header";
import Nav from "./Nav";
import List from "./List";
import Bottom from "./Bottom";
import URI from 'urijs';
import './index.scss'
import {
    setTo,
    setFrom,
    setDepartDate,
    setFormerDay,
    setLaterDay,
    fetchTicketList,
    showFilterLayer,
    hideFilterLayer,
} from './actions/queryActions';
import {bindActionCreators} from 'redux'
import dayJs from 'dayjs'

function Query(props) {
    const {
        from,
        to,
        departDate,
        ticketListData,
        filterLayerVisible,
        dispatch
    } = props;
    useEffect(() => {
        const {from, to, departDate} = URI.parseQuery(window.location.search);
        dispatch(setFrom(decodeURI(from)));
        dispatch(setTo(decodeURI(to)));
        dispatch(setDepartDate(departDate));
        dispatch(fetchTicketList())
    }, []);
    const navCbs = useMemo(() => {
        return bindActionCreators({
            setFormerDay,
            setLaterDay
        }, dispatch)
    }, []);
    const bottomCbs = useMemo(() => {
        return bindActionCreators({
            showFilterLayer,
            hideFilterLayer,
        }, dispatch)
    }, []);
    const handleBack = function () {
        window.history.go(-1)
    };
    const selectTicket = function (ticketInfo) {
        localStorage.setItem('cache_ticket_info', JSON.stringify(ticketInfo))
        window.open('/ticket.html', '_self')
    };
    return (
        <div className={`queryCtn`}>
            <div className="header_wrap">
                <Header title={from + '→' + to} onBack={handleBack}/>
            </div>
            <Nav
                departDate={departDate}
                {...navCbs}/>
            <div className="listWrap">
                <List
                    selectTicket={selectTicket}
                    ticketListData={ticketListData}/>
            </div>
            <Bottom
                filterLayerVisible={filterLayerVisible}
                {...bottomCbs}/>
        </div>
    );
}

export default Query;