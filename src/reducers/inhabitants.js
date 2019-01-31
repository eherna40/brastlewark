import * as types from '../actions/actionTypes';
import initialState from './initialState';
 
 
export default function inhabitants_reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.INHABITANTS_LOAD_DATA:
        return {
                ...state,
                population: state.population.concat(action.data)
            };
        case types.INHABITANTS_LOAD_FILTERS:
        return {
            ...state,
            professions: {
                ...state.professions,
                options: action.data.professions
            },
            hair: {
                ...state.hair,
                options: action.data.hair
            },
            height: {
                ...state.height,
                min: action.data.heightMin,
                max: action.data.heightMax
            },
            weight: {
                ...state.weight,
                min: action.data.weightMin,
                max: action.data.weightMax
            },
            age: {
                ...state.age,
                min: action.data.ageMin,
                max: action.data.ageMax
            }
        }
        default:
            return state
    }
}