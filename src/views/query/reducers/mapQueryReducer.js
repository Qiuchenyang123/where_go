import {
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_DEPART_DATE,
    ACTION_SET_TICKET_LIST_DATA,
    ACTION_SET_TICKET_LIST_LOADING_STATUS,
    ACTION_SET_FILTER_LAYER_VISIBLE,
} from '../actions/queryActions';

export default {
    from(state = '北京', action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_FROM:
                return payload;
            default:
                return state
        }
    },
    to(state = '上海', action) {
        const { type, payload } = action;
        switch (type) {
            case ACTION_SET_TO:
                return payload;
            default:
                return state
        }
    },
    departDate(state = null, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_DEPART_DATE:
                return payload;
            default:
                return state
        }
    },
    formerDay(state = null, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_DEPART_DATE:
                return payload;
            default:
                return state
        }
    },
    ticketListData(state = [], action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_TICKET_LIST_DATA:
                return payload;
            default:
                return state
        }
    },
    ticketListLoadingStatus(state = false, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_TICKET_LIST_LOADING_STATUS:
                return payload;
            default:
                return state
        }
    },
    selectedTicketData(state = false, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_TICKET_LIST_LOADING_STATUS:
                return payload;
            default:
                return state
        }
    },
    filterLayerVisible(state = false, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_FILTER_LAYER_VISIBLE:
                return payload;
            default:
                return state
        }
    }
}