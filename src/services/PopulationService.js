import axios from 'axios';
import * as at from './../actions/actionCreators';
//import * as filterActions from './filtersActions';

const SERVER_END_POINT = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

export const getInhabitants = () => async(dispatch, getState) => {
  console.log('getInhabitants');
  let json = await axios(SERVER_END_POINT);

  json.data.Brastlewark.map((item, i) => {
    item.id = i;
    return item;
  })

  dispatch(at.inhabitantsLoadData(json.data.Brastlewark));
  dispatch(at.createFilters(json.data.Brastlewark));
}