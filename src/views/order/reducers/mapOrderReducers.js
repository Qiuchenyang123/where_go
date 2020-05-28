import {
    ACTION_SET_DEPART_STATION,
    ACTION_SET_ARRIVE_STATION,
    ACTION_SET_DEPART_TIME,
    ACTION_SET_ARRIVE_TIME,
    ACTION_SET_TIME_DURATION,
    ACTION_SET_TRAIN_NUMBER,
    ACTION_SET_TRAIN_TYPE,
    ACTION_SET_PRICE,
    ACTION_SET_PASSENGERS,
    ACTION_SET_TOTAL_PRICE,
} from '../actions/orderActions'

export default {
    departStation(state = null, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_DEPART_STATION:
                return payload;
            default:
                return state
        }
    },
    arriveStation(state = null, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_ARRIVE_STATION:
                return payload;
            default:
                return state
        }
    },
    departTime(state = null, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_DEPART_TIME:
                return payload;
            default:
                return state
        }
    },
    arriveTime(state = null, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_ARRIVE_TIME:
                return payload;
            default:
                return state
        }
    },
    timeDuration(state = null, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_TIME_DURATION:
                return payload;
            default:
                return state
        }
    },
    trainNumber(state = null, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_TRAIN_NUMBER:
                return payload;
            default:
                return state
        }
    },
    trainType(state = null, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_TRAIN_TYPE:
                return payload;
            default:
                return state
        }
    },
    price(state = null, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_PRICE:
                return payload;
            default:
                return state
        }
    },
    passengers(state = null, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_PASSENGERS:
                return payload;
            default:
                return state
        }
    },
    totalPrice(state = null, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_TOTAL_PRICE:
                return payload;
            default:
                return state
        }
    },
}