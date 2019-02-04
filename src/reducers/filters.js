import * as types from '../actions/actionTypes';
import initialState from './initialState';
 
 
export default function filter(state = initialState, action = {}) {
    switch (action.type) {
        case types.FILTER_BY_PROFESSION:
            return {
                ...state,
                professionSelected: action.professionSelected
            };
        case types.FILTER_BY_NAME:
            return {
                ...state,
                gnomeSelected: action.gnomeSelected
            };
        case types.SET_AGE_SELECTED:
            return {
                ...state,
                age: {
                    ...state.age,
                    from: action.from,
                    to: action.to
                }
            }
        case types.SET_WEIGHT_SELECTED:
            return {
                ...state,
                weight: {
                    ...state.weight,
                    from: action.from,
                    to: action.to
                }
        }
        case types.SET_HEIGHT_SELECTED:
            return {
                ...state,
                height: {
                    ...state.height,
                    from: action.from,
                    to: action.to
                }
        }
        case types.APPLY_FILTERS:
            return {
                ...state,
                population: action.data
            }
        case types.SET_FETCH_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.SET_FETCH_READY:
            return {
                ...state,
                loading: false
        }        
        default:
            return state
    }
}