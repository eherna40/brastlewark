import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import 'typeface-roboto';

//Own componentes
import Wrapper from './components/Wrapper';
import * as populationService from './services/PopulationService';

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
});

class App extends Component {
  componentWillMount(){
    this.props.getInhabitants();
  } 
  
  render(){
      return <Wrapper/>
  }
}

// State to props
const mapStateToProps = state => {
  return {
    population: state.population
  }
};

const mapDispatchToProps = dispatch =>({
  getInhabitants: () =>{
    return dispatch(populationService.getInhabitants());
  }
});

// Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
