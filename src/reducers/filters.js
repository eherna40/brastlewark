import * as types from '../actions/actionTypes';
import initialState from './initialState';
 
 
export default function filter_reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.FILTER_BY_PROFESSION:
            return {
                ...state
            };
        case types.FILTER_BY_NAME:
            return {
                ...state
            };
        case types.SET_AGE_SELECTED:
            return {
                ...state,
                filters:{
                    age: {
                        ...state.filters.age,
                        from: action.from,
                        to: action.to
                    }
                }
            }
        default:
            return state
    }
}