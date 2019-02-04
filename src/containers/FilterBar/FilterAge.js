import React, { Component } from 'react';
import {connect} from 'react-redux';
import Nouislider from 'react-nouislider';
import wNumb from 'wnumb';

import './../../static/nouislider.css';
import * as at from '../../actions/actionCreators';
import * as types from './../../actions/actionTypes';

class FilterAge extends Component {
    onChange(value){
        let self=this;
        this.props.setAgeSelected(value);
        setTimeout(function(){
            self.props.applyFilters(types.SET_AGE_SELECTED);
        }, 200);
    };

    render(){
        const{age, loading} = this.props;
        let max =  (!loading && age && age.max) || 400;
        let min =  (!loading && age && age.min) || 0;
        let from = (!loading && age && age.from) || min;
        let to =   (!loading && age && age.to) || max;
        return(
            <div className="FilterAge">
                Age ({min} - {max}):
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
        age: state.filters.age,
        loading: state.filters.loading
    };    
};

const mapDispatchToProps = dispatch => ({
    setAgeSelected: (value) =>{
       return dispatch(at.setAgeSelected(parseInt(value[0]), parseInt(value[1])));
    },
    applyFilters: (type) => {
        return dispatch(at.applyFilters(type));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterAge);