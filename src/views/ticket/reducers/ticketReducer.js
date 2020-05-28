import ticketReducer from './mapTicketReducer';
import {combineReducers} from 'redux'

const reducer = combineReducers(ticketReducer);
export default reducer