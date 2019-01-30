import * as types from './actionTypes';

export const inhabitantsLoadData=(data)=>{
    console.log('inhabitantsLoad');
    return {
        type: types.INHABITANTS_LOAD_DATA, 
        data
    }
}

export const inhabitantsLoadError=()=>{
    return {
        type: types.INHABITANTS_LOAD_ERROR, data: {}
    }
}
