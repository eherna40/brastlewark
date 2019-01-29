import * as types from './actionTypes';
 
export function filterByProfession() {
    return {
        type: types.FILTER_BY_PROFESSION
    };
}
 
export function filterByName() {
    return {
        type: types.FILTER_BY_NAME
    };
}