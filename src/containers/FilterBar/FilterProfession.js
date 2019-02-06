import React, { Component } from 'react';
import {connect} from 'react-redux';

import './../../assets/styles/nouislider.css';
import * as at from '../../actions/actionCreators';
import * as types from '../../actions/actionTypes';

class FilterProfession extends Component {
  

    onChange(event){
        let self=this;
        this.props.setProfessionSelected(event.target.value);
        setTimeout(function(){
            self.props.applyFilters(types.FILTER_BY_PROFESSION);
        }, 200);
    };


    render(){
        const{professions} = this.props;
        let flagFirts=true;
        return(
            <div className="filter-profession">
                Profession:<br/>
                <select placeholder="Select a profession" onChange={this.onChange.bind(this)}>
                    {
                        professions.options.map(item => {
                            if(flagFirts){
                                flagFirts=false;
                                return <option key='-1' value=''>All professions</option>
                            }
                            return <option key={item} value={item}>{item}</option>
                        })          
                    }
                </select>
            </div>
        );        
    };

};

const mapStateToProps = state => {
    return{
        professions: state.filters.professions,
        loading: state.filters.loading
    };    
};

const mapDispatchToProps = dispatch => ({
    setProfessionSelected: (value) =>{
        return dispatch(at.filterByProfession(value));
    },
    applyFilters: (type) => {
        return dispatch(at.applyFilters(type));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterProfession);