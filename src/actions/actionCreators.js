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
  let {age, weight, height, qualifications, hair, professions, gnomeSelected, showDetail}  = initialState;
  
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
  showDetail = false;
    
  return {
    type: types.INHABITANTS_LOAD_FILTERS, data: {age, weight, height, qualifications, hair, professions, gnomeSelected, showDetail}    
  }
}

export const applyFilters = (filter) => (dispatch, getState) => {
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
  if(!f.gnomeSelected || f.gnomeSelected===null) { f.gnomeSelected=''; }
  if(!f.professionSelected || f.professionSelected===null) { f.professionSelected=''; }
  
  items.forEach(item=>{
        showItem = (((f.age.from <= parseFloat(item.age)) && (f.age.to >= parseFloat(item.age))) &&  
                   ((f.height.from <= parseFloat(item.height)) && (f.height.to >= parseFloat(item.height))) && 
                   ((f.weight.from <= parseFloat(item.weight)) && (f.weight.to >= parseFloat(item.weight))));
        if(f.gnomeSelected!==''){
          showItem= showItem &&
            (item.name.toUpperCase().indexOf(f.gnomeSelected.toUpperCase())>=0);
        } 
        if(f.professionSelected!==''){
          showItem= showItem &&
          (item.professions.includes(f.professionSelected));
        }          
    //}
    item.display=showItem; //to show or not depending of the coincidence with the filters
  });

  dispatch({type: types.APPLY_FILTERS, data: items});
};


export const setAgeSelected = (from, to) => ({ type: types.SET_AGE_SELECTED, from, to});

export const setHeightSelected = (from, to) => ({ type: types.SET_HEIGHT_SELECTED, from, to});

export const setWeightSelected = (from, to) => ({ type: types.SET_WEIGHT_SELECTED, from, to});

export const filterByProfession = (professionSelected) => ({type: types.FILTER_BY_PROFESSION, professionSelected});

export const filterByName = (gnomeSelected) => ({ type: types.FILTER_BY_NAME, gnomeSelected });

export const showHideDetail = (id, show) => (dispatch, getState) => {
  const state = getState();
  let items = state.inhabitants.population;
  if(show){
    items.forEach(item=>{
      item.showDetail=false;  
      if(item.id===id){
        item.showDetail=true;  
      }      
    });
  } else{
    items.forEach(item=>{
      item.showDetail=false;
    });
  }
  dispatch({type: types.APPLY_FILTERS, data: items});
};

const setSetFetchingState = (payload) => ({type: payload});