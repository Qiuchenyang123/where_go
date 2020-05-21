import React, {useEffect, useMemo} from 'react';
import Header from "./components/Header";
import Nav from "./Nav";
import List from "./List";
import Bottom from "./Bottom";
import URI from 'urijs'
import {
    setTo,
    setFrom,
    setDepartDate,
    setFormerDay,
    setLaterDay,
    fetchTicketList,
    selectTicket
} from './actions/queryActions';
import {bindActionCreators} from 'redux'
import dayJs from 'dayjs'

function Query(props) {
    const {
        from,
        to,
        departDate,
        ticketListData,
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
    const handleBack = function () {
        window.history.go(-1)
    };
    return (
        <div className={`queryCtn`}>
            <div className="header_wrap">
                <Header title={from + '→' + to} onBack={handleBack}/>
            </div>
            <Nav
                departDate={departDate}
                {...navCbs}/>
            <List
                ticketListData={ticketListData}/>
            <Bottom/>
        </div>
    );
}

export default Query;