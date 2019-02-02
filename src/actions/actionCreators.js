//import axios from 'axios';
import * as types from './actionTypes';
import initialState from './../reducers/initialState';
import {cloneDeep} from 'lodash';

const SERVER_END_POINT = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

export const getInhabitants = () =>  {
  
    return dispatch =>{
      //activate the start of the search
      dispatch(setSetFetchingState(types.SET_FETCH_LOADING));

      return fetch(SERVER_END_POINT)
      .then(
        data=> (data.json())
        .then(
          data=> {
            data.Brastlewark.map((item, i) => {
              item.id = i;
              item.display=true; //flag to display or not the item 
              return item;
            });
 
          dispatch(inhabitantsLoadData(data.Brastlewark));
          dispatch(createFilters(data.Brastlewark));
          dispatch(setSetFetchingState(types.SET_FETCH_READY));
          }
        )
      )
}
}

export const inhabitantsLoadData=(data)=>( { type: types.INHABITANTS_LOAD_DATA, data });

export const inhabitantsLoadError=()=> ({ type: types.INHABITANTS_LOAD_ERROR, data:{}});

export const createFilters = (items) => {
  let {age, weight, height, qualifications, hair, professions, gnomeSelected} = initialState;
  
  items.forEach(element => {
    if(element.id===0){
        age.min = element.age;
        age.max = element.age;
        weight.min = element.weight;
        weight.max = element.weight;
        height.min = element.height;
        height.max = element.height;
        qualifications.maxNumberOfFriends= element.friends.length || 0;
        qualifications.maxNumberOfProfessions=element.professions.length||0;
    }   
    // Get Max's and Min's
    if(age.min > element.age){ age.min = element.age }
    if(age.max < element.age){ age.max = element.age }

    if(weight.min > element.weight){ weight.min = element.weight }
    if(weight.max < element.weight){ weight.max = element.weight }

    if(height.min > element.height){ height.min = element.height }
    if(height.max < element.height){ height.max = element.height }

    // Create a collection of kind of hairs
    if(element.hair_color){
      if(hair.options.indexOf(element.hair_color) === -1){
        hair.options.push(element.hair_color);
      }
    }
    
    // Create a collection of kind of professions
    for (let x in element.professions){
      if(professions.options.indexOf(element.professions[x]) === -1){
        professions.options.push(element.professions[x]);
      }
    } 

    // Ranking of best qualified (popularity and friendly)
    if(qualifications.maxNumberOfFriends< element.friends.length){ qualifications.maxNumberOfFriends = element.friends.length }
    if(qualifications.maxNumberOfProfessions< element.professions.length){ qualifications.maxNumberOfProfessions = element.professions.length }
    
  });
 
  age.from = age.min;
  age.to = age.max;
  weight.from = weight.min;
  weight.to = weight.max;
  height.from = height.min;
  height.to = height.max;

  professions.selected = '';
  hair.selected = '';
  gnomeSelected = '';
    
  return {
    type: types.INHABITANTS_LOAD_FILTERS, data: {age, weight, height, qualifications, hair, professions, gnomeSelected}    
  }
}

export const applyFilters = (filter) => (dispatch, getState) => {
  console.log('en applyFilters. Filter:' + filter);
  const state = getState();
  let items = state.inhabitants.population;
  let showItem=false;
  let f = cloneDeep(state.filters);

  if(!f.age.from){    f.age.from = parseFloat(f.age.min); }
  if(!f.age.to){      f.age.to = parseFloat(f.age.max); }
  if(!f.weight.from){ f.weight.from = parseFloat(f.weight.min); }
  if(!f.weight.to){   f.weight.to = parseFloat(f.weight.max); }
  if(!f.height.from){ f.height.from = parseFloat(f.height.min); }
  if(!f.height.to){   f.height.to = parseFloat(f.height.max); }

  items.forEach(item=>{
    switch (filter){
      case types.SET_AGE_SELECTED:
        showItem = ((f.age.from <= parseFloat(item.age)) && (f.age.to >= parseFloat(item.age)));
        break;
      case types.SET_HEIGHT_SELECTED:
        showItem =  ((f.height.from <= parseFloat(item.height)) && (f.height.to >= parseFloat(item.height)));
        break;
      case types.SET_WEIGHT_SELECTED:
        showItem =  ((f.weight.from <= parseFloat(item.weight)) && (f.weight.to >= parseFloat(item.weight)));
        break;
      case types.FILTER_BY_NAME:
        showItem =  (f.name.toUpperCase().indexOf(item.name.toUpperCase())>=0);
        break;
      case types.FILTER_BY_PROFESSION:
        showItem =  (f.profession.toUpperCase().indexOf(item.professions.toUpperCase())>=0);
        break;
      default:
        showItem = false;
        break;
    }
    item.display=showItem; //to show or not depending of the coincidence with the filters
    
  });

  dispatch({type: types.APPLY_FILTERS, data: items});
};


export const setAgeSelected = (from, to) => ({ type: types.SET_AGE_SELECTED, from, to});

export const setWeightSelected = (from, to) => ({ type: types.SET_WEIGHT_SELECTED, from, to});

export const filterByProfession = () => ({type: types.FILTER_BY_PROFESSION});

export const filterByName = () => ({ type: types.FILTER_BY_NAME });

const setSetFetchingState = (payload) => ({type: payload});