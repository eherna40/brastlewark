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
            filters:{
                professions: {
                    ...state.filters.professions,
                    options: action.data.professions
                },
                hair: {
                    ...state.filters.hair,
                    options: action.data.hair
                },
                height: {
                    ...state.filters.height,
                    min: action.data.heightMin,
                    max: action.data.heightMax,
                    from: action.data.heightMin,
                    to: action.data.heightMax
                },
                weight: {
                    ...state.filters.weight,
                    min: action.data.weightMin,
                    max: action.data.weightMax
                },
                age: {
                    ...state.filters.age,
                    min: action.data.ageMin,
                    max: action.data.ageMax
                }
            }
        }
        default:
            return state
    }
}