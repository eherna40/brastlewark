import * as types from '../actions/actionTypes';
import initialState from './initialState';
 
 
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.FILTER_BY_PROFESSION:
            return {
                ...state,
                count: state.count + 1
            };
        case types.FILTER_BY_NAME:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state
    }
}