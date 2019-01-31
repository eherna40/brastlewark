import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Nouislider from 'react-nouislider';
import wNumb from 'wnumb';
import './../../static/nouislider.css';
//import * as at from './../actions/actionCreators';
import styles from './styles';


  
class FilterBar extends Component {
    
    onAgeChange(value){
        //const {dispatch} = this.props;
        /*dispatch({
          type: at.FILTERS_SET_AGE,
          from: parseInt(value[0]),
          to: parseInt(value[1])
        });*/
    };

    render(){
       return(
            <div>   
                {this.renderAgeFilter()}
            </div>
       );        
    };

    renderAgeFilter(){
        const{classes, state} = this.props;
    
        let max = 100;
        let min = 0;
        let from = min;
        let to = max;
        if(state.filters.age.max){ max = state.filters.age.max }
        if(state.filters.age.min){ min = state.filters.age.min }
        if(state.filters.age.selectFrom){ from = state.filters.age.selectFrom }
        if(state.filters.age.selectTo){ to = state.filters.age.selectTo }

        return (
          <div>
          <Nouislider
              classes={{ container: classes.slider }}
              range={{min: min, max: max}}
              start={[from, to]}
              step={1} connect={true}
              format={wNumb({decimals: 0, thousand: '', suffix: ''})}
              tooltips onChange={this.onAgeChange.bind(this)}/>
          </div>
        );
    };
    

};





export default withStyles(styles)(FilterBar);