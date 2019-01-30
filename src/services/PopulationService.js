/*import axios from 'axios';

const SERVER_END_POINT = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

export class PopulationService {
    getPopulation = new Promise(
        function (resolve, reject) {
            return axios.get(SERVER_END_POINT)
            .then(res => res.data.Brastlewark)
            .then(data => {
                resolve(data);
            }).catch(error=>{
                reject(error);
            });   
        }
    );
}*/

/**
 * If we are running this code from server, nodejs
 * needs this library to fetch api data
 */
import axios from 'axios';
import * as at from './../actions/actionCreators';
//import * as filterActions from './filtersActions';

const SERVER_END_POINT = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

export const getInhabitants = () => async(dispatch, getState) => {
  
  let json = await axios(SERVER_END_POINT);

  json.data.Brastlewark.map((item, i) => {
    item.id = i;
    return item;
  })

  dispatch(at.inhabitantsLoadData(json.data.Brastlewark));
  //dispatch(filterActions.createFilters('create'));
}