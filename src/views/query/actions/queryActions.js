export const ACTION_SET_FROM = 'SET_FROM';
export const ACTION_SET_TO = 'SET_TO';
export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE';
export const ACTION_SET_FORMER_DAY = 'SET_FORMER_DAY';
export const ACTION_SET_TICKET_LIST_DATA = 'SET_TICKET_LIST_DATA';
export const ACTION_SET_TICKET_LIST_LOADING_STATUS = 'SET_TICKET_LIST_LOADING_STATUS';
export const ACTION_SET_FILTER_LAYER_VISIBLE = 'SET_FILTER_LAYER_VISIBLE';
export const ACTION_SELECT_TICKET = 'SELECT_TICKET';

export function setFrom(from) {
    return {
        type: ACTION_SET_FROM,
        payload: from
    }
}

export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        payload: to
    }
}

export function setDepartDate(date) {
    return {
        type: ACTION_SET_DEPART_DATE,
        payload: date
    }
}

export function setFormerDay() {
    return (dispatch, getState) => {
        const {departDate} = getState();
        let time = new Date(parseInt(departDate, 10));
        const newTime = time.setDate(time.getDate() - 1);
        dispatch(setDepartDate(newTime))
    }
}

export function setLaterDay() {
    return (dispatch, getState) => {
        const {departDate} = getState();
        let time = new Date(parseInt(departDate, 10));
        const newTime = time.setDate(time.getDate() + 1);
        dispatch(setDepartDate(newTime))
    }
}

export function setTicketListLoadingStatus(loadingStatus) {
    return {
        type: ACTION_SET_TICKET_LIST_LOADING_STATUS,
        payload: loadingStatus
    }
}

export function fetchTicketList() {
    return (dispatch, getState) => {
        const {tickedListLoadingStatus} = getState();
        const cacheTicketList = JSON.parse(localStorage.getItem('cache_ticket_list')) || [];
        if (cacheTicketList.expire && cacheTicketList.expire > Date.now()) {
            dispatch(setTicketListData(cacheTicketList.data))
        }
        if (tickedListLoadingStatus) {
            return
        }
        dispatch(setTicketListLoadingStatus(true));
        fetch('http://localhost:23333/ticket/list')
            .then(res => res.json())
            .then(data => {
                dispatch(setTicketListData(data));
                const obj = {
                    data,
                    expires: Date.now() + 5 * 60 * 1000
                };
                localStorage.setItem('cache_ticket_list', JSON.stringify(obj));
                dispatch(setTicketListLoadingStatus(false))
            })
            .catch(err => {console.log('fetchTicketList' + err)})
    }
}

export function setTicketListData(ticketListData) {
    return {
        type: ACTION_SET_TICKET_LIST_DATA,
        payload: ticketListData
    }
}

export function setFilterLayerVisible(ifShow) {
    return {
        type: ACTION_SET_FILTER_LAYER_VISIBLE,
        payload: ifShow
    }
}

export function showFilterLayer() {
    return dispatch => {
        dispatch(setFilterLayerVisible(true))
    }
}

export function hideFilterLayer() {
    return dispatch => {
        dispatch(setFilterLayerVisible(false))
    }
}

export function selectTicket(selectedTicketData) {
    return {
        type: ACTION_SELECT_TICKET,
        payload: selectedTicketData
    }
}