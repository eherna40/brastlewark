import React, {Component} from 'react';
import { store } from './../store';
import { connect }  from 'react-redux';

import { getInhabitants }  from './../actions/actionCreators';

import GnomeList from './GnomeList';

import FilterBar from '../components/FilterBar';
import initialState from '../reducers/initialState';

class Wrapper extends Component {
  componentDidMount(){
    this.props.getInhabitants();
  }

  constructor(){
    super();
    this.state = initialState;
    store.subscribe(()=>{
      this.setState({
        loading: store.getState().filters.loading,
        age: store.getState().inhabitants.age,
        population: store.getState().inhabitants.population}); 
         
    });
  }
 
  render() {
    return (
      <div style={{width:'100%', padding:'15px', margin:'10px'}}>
        <div style={{width:'15%', background:'#ffffff', float:'left', padding:'10px'}}>
          <FilterBar/>
        </div>
        <div style={{width:'80%', background:'#ffffff', float:'left', padding:'10px'}}>
          <GnomeList/>        
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    population: state.inhabitants.population, 
    age: state.filters.age, 
    loading: state.filters.loading 
  }
}

const mapDispatchToProps = dispatch =>({
  getInhabitants: () =>{
    return dispatch(getInhabitants());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);