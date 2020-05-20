import {combineReducers} from 'redux';
import reducers from './mapQueryReducer'
const reducer = combineReducers(reducers);
export default reducer