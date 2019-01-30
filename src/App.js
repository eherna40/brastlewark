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
    /*this.populationService.getPopulation
    .then(function (population) {
        self.setState({population});
    })
    .catch(function (error) {
        console.log(error.message);
    });*/
  }  

  render(){
      //const population=this.state.population;
      return(
        <div>
          Hola
          {this.props.population}          
          chau
          <Wrapper></Wrapper>
        </div>
      );
  }
}

// State to props
const mapStateToProps = state => {
  return {
    population: state.population
  }
};

// Dispatch to Props
/*const mapDispatchToProps = dispatch =>({
  populationService
});*/

// Connect everything
export default connect(mapStateToProps, populationService)(withStyles(styles)(App));
