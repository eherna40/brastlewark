import * as types from './actionTypes';
import initialState from './../reducers/initialState';
//import {cloneDeep} from 'lodash';

export const inhabitantsLoadData=(data)=>{
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

export const createFilters = (items) => {
  let filter = initialState.filters;

  items.forEach(element => {
    if(element.id===0){
        filter.age.min = element.age;
        filter.age.max = element.age;
        filter.weight.min = element.weight;
        filter.weight.max = element.weight;
        filter.height.min = element.height;
        filter.height.max = element.height;
        filter.qualifications.maxNumberOfFriends= element.friends.length || 0;
        filter.qualifications.maxNumberOfProfessions=element.professions.length||0;
    }   
    // Get Max's and Min's
    if(filter.age.min > element.age){ filter.age.min = element.age }
    if(filter.age.max < element.age){ filter.age.max = element.age }

    if(filter.weight.min > element.weight){ filter.weight.min = element.weight }
    if(filter.weight.max < element.weight){ filter.weight.max = element.weight }

    if(filter.height.min > element.height){ filter.height.min = element.height }
    if(filter.height.max < element.height){ filter.height.max = element.height }

    if(element.hair_color){
      if(filter.hair.options.indexOf(element.hair_color) === -1){
        filter.hair.options.push(element.hair_color);
      }
    }

    for (let x in element.professions){
      if(filter.professions.options.indexOf(element.professions[x]) === -1){
        filter.professions.options.push(element.professions[x]);
      }
    } 

    if(filter.qualifications.maxNumberOfFriends< element.friends.length){ filter.qualifications.maxNumberOfFriends = element.friends.length }
    if(filter.qualifications.maxNumberOfProfessions< element.professions.length){ filter.qualifications.maxNumberOfProfessions = element.professions.length }
    
  });
 
 /* for (var i in items) {
    
    // Initialize
    if(i===0){
        filter.age.min = items[i].age;
        filter.age.max = items[i].age;
        filter.weight.min = items[i].weight;
        filter.weight.max = items[i].weight;
        filter.height.min = items[i].height;
        filter.height.max = items[i].height;
        filter.qualifications.maxNumberOfFriends= items[i]
        filter.qualifications.maxNumberOfProfessions        
    }


    // Get Max's and Min's
    if(filter.age.min > items[i].age){ filter.age.min = items[i].age }
    if(filter.age.max < items[i].age){ filter.age.max = items[i].age }

    if(filter.weight.min > items[i].weight){ filter.weight.min = items[i].weight }
    if(filter.weight.max < items[i].weight){ filter.weight.max = items[i].weight }

    if(filter.height.min > items[i].height){ filter.height.min = items[i].height }
    if(filter.height.max < items[i].height){ filter.height.max = items[i].height }

    if(items[i].hair_color){
      if(filter.hair.options.indexOf(items[i].hair_color) === -1){
        filter.hair.options.push(items[i].hair_color);
      }
    }

    for (let x in items[i].professions){
      if(filter.professions.options.indexOf(items[i].professions[x]) === -1){
        filter.professions.options.push(items[i].professions[x]);
      }
    }
  }*/

  filter.age.selectFrom = filter.age.min;
  filter.age.selectTo = filter.age.max;
  filter.weight.selectFrom = filter.weight.min;
  filter.weight.selectTo = filter.weight.max;
  filter.height.selectFrom = filter.height.min;
  filter.height.selectTo = filter.height.max;

  filter.professions.selected = '';
  filter.hair.selected = '';
  filter.gnomeSelected = '';
    
  return {
    type: types.INHABITANTS_LOAD_FILTERS, data: filter    
  }
}
