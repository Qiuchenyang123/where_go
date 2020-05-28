export const ACTION_SET_TICKET_SCHEMA_LAYER_VISIBLE = 'SET_TICKET_SCHEMA_LAYER_VISIBLE';
export const ACTION_SHOW_TICKET_SCHEMA_LAYER = 'SHOW_TICKET_SCHEMA_LAYER';
export const ACTION_HIDE_TICKET_SCHEMA_LAYER = 'HIDE_TICKET_SCHEMA_LAYER';
export const ACTION_SET_TICKET_SCHEMA_DATA = 'SET_TICKET_SCHEMA_DATA';

export function setTicketSchemaLayerVisible(ifShow) {
    return {
        type: ACTION_SET_TICKET_SCHEMA_LAYER_VISIBLE,
        payload: ifShow
    }
}

export function showTicketSchemaLayer() {
    console.log(14)
    return dispatch => {
        dispatch(setTicketSchemaLayerVisible(true))
    }
}

export function hideTicketSchemaLayer() {
    return dispatch => {
        dispatch(setTicketSchemaLayerVisible(false))
    }
}

export function setTicketSchemaData(data) {
    return {
        type: ACTION_SET_TICKET_SCHEMA_DATA,
        payload: data
    }
}

export function fetchSchemaData() {
    return (dispatch) => {
        fetch('http://localhost:23333/ticket/schema')
            .then(res => res.json())
            .then(data => {
                return dispatch(setTicketSchemaData(data))
            })
    }
}