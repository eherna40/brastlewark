import React, { Component } from 'react';
import {connect} from 'react-redux';

import './../../static/nouislider.css';
import * as at from '../../actions/actionCreators';
import * as types from '../../actions/actionTypes';

class FilterName extends Component {
  

    onChange(event){
        let self=this;
        this.props.setNameSelected(event.target.value);
        setTimeout(function(){
            self.props.applyFilters(types.FILTER_BY_NAME);
        }, 200);
    };

    render(){
        return(
            <div className="FilterName">
                Name:<br/> 
                <input className="FilterNameText" type="text" placeholder = "Type a search name" size='30' onKeyUp={this.onChange.bind(this)}/>
            </div>
        );        
    };

};

const mapStateToProps = state => {
    return{
       loading: state.filters.loading
    };    
};

const mapDispatchToProps = dispatch => ({
    setNameSelected: (value) =>{
        return dispatch(at.filterByName(value));
    },
    applyFilters: (type) => {
        return dispatch(at.applyFilters(type));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);