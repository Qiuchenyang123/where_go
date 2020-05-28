import {
    ACTION_SET_TICKET_SCHEMA_LAYER_VISIBLE,
    ACTION_SET_TICKET_SCHEMA_DATA,
} from '../actions/ticketActions';

export default {
    ticketSchemaLayerVisible(state = false, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_TICKET_SCHEMA_LAYER_VISIBLE:
                return payload;
            default:
                return state
        }
    },
    ticketSchemaData(state = [], action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_TICKET_SCHEMA_DATA:
                return payload;
            default:
                return state
        }
    }
}