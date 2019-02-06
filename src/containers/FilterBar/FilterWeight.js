import React, { Component } from 'react';
import {connect} from 'react-redux';
import Nouislider from 'react-nouislider';
import wNumb from 'wnumb';

import './../../assets/styles/nouislider.css';
import * as at from '../../actions/actionCreators';
import * as types from './../../actions/actionTypes';

class FilterWeight extends Component {
  

    onChange(value){
        let self=this;
        this.props.setWeightSelected(value);
        setTimeout(function(){
            self.props.applyFilters(types.SET_WEIGHT_SELECTED);
        }, 200);
    };

    render(){
        const{weight, loading} = this.props;
        let max =  (!loading && weight && weight.max) || 400;
        let min =  (!loading && weight && weight.min) || 0;
        let from = (!loading && weight && weight.from) || min;
        let to =   (!loading && weight && weight.to) || max;
        return(
            <div className="filter-weight">
                Weigth ({min.toFixed(2)} - {max.toFixed(2)}):
                <Nouislider
                    range={{min: min, max: max}}
                    start={[from, to]}
                    step={1} connect={true}
                    format={wNumb({decimals: 0, thousand: '', suffix: ''})}
                    tooltips onChange={this.onChange.bind(this)}/>
           </div>
        );        
    };

};

const mapStateToProps = state => {
    return{
        weight: state.filters.weight,
        loading: state.filters.loading
    };    
};

const mapDispatchToProps = dispatch => ({
    setWeightSelected: (value) =>{
       return dispatch(
            at.setWeightSelected(parseInt(value[0]), parseInt(value[1]))
        );
    },
    applyFilters: (type) => {
        return dispatch(at.applyFilters(type));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterWeight);