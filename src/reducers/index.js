import { combineReducers } from 'redux';
import filters from './filters';
import inhabitants from './inhabitants';
 
export default combineReducers({
    filters,
    inhabitants
});