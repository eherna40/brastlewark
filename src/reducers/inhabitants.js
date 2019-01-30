import * as types from '../actions/actionTypes';
import initialState from './initialState';
 
 
export default function inhabitants_reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.INHABITANTS_LOAD_DATA:
        return {
                ...state,
                population: state.population.concat(action.data)
            };
        default:
            return state
    }
}