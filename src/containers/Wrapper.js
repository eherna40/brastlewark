import React, {Component} from 'react';
import { store } from './../store';
import { connect }  from 'react-redux';

import { getInhabitants }  from './../actions/actionCreators';

import GnomeList from './GnomeList';
import FilterBar from '../components/FilterBar';
import initialState from '../reducers/initialState';

import './../static/styles.scss';

class Wrapper extends Component {
  status={
    loading:true
  }
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
    const {loading}=this.props;
    return (
      <div>        
        <div id="main-wrapper-population">
          <div className="filter-bar">
            <FilterBar/>
          </div>
          <div className="gnome-list">
            {loading && (<div className="progress-bar">Processing.... wait an instant</div>)} 
           <GnomeList/>        
          </div>
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