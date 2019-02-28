import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function inhabitants(state = initialState, action = {}) {
  switch (action.type) {
    case types.INHABITANTS_LOAD_DATA:
      return {
        ...state,
        population: action.data,
        dataFiltered: action.data
      };
    case types.INHABITANTS_LOAD_FILTERS:
      return {
        ...state,
        professions: {
          options: action.data.professions
        },
        hair: {
          options: action.data.hair
        },
        height: {
          min: action.data.heightMin,
          max: action.data.heightMax,
          from: action.data.heightMin,
          to: action.data.heightMax
        },
        weight: {
          min: action.data.weightMin,
          max: action.data.weightMax,
          from: action.data.weightMin,
          to: action.data.weightMax
        },
        age: {
          min: action.data.ageMin,
          max: action.data.ageMax,
          from: action.data.ageMin,
          to: action.data.ageMax
        },
        showDetail: false
      };
    default:
      return state;
  }
}
