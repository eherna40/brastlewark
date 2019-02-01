import React, {Component} from 'react';
import {store} from '../store';
import initialState from './../reducers/initialState';
import GnomeList from './GnomeList';
import FilterBar from './FilterBar';

class Wrapper extends Component {

  state = initialState;

  constructor(){
    super();
    store.subscribe(()=>{
      this.setState({population: store.getState().inhabitants.population}); 
    });
  }
 
  render() {
    const {dispatch} = this.props;
    return (
      <div style={{width:'100%', padding:'15px', margin:'10px'}}>
        <div style={{width:'15%', background:'#ffffff', float:'left', padding:'10px'}}>
          <FilterBar state={this.state} dispatch={dispatch}/>
        </div>
        <div style={{width:'80%', background:'#ffffff', float:'left', padding:'10px'}}>
          <GnomeList items={this.state.population}/>        
        </div>
      </div>
    );
  }
}


export default Wrapper;