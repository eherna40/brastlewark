import React, {Component} from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './../static/styles.scss';

import GnomeDetail from '../components/GnomeDetail';

class GnomeList extends Component {
    
    render(){
        return (
            <div>
                <Grid container spacing={24}>
                    {!this.props.loading && this.props.population.length && this.props.population.map(item => 
                        <div className="CardGnome" key={item.id}>
                            <GnomeDetail item={item}/>
                        </div>
                    )}
                </Grid>
            </div>
        );
    } 
}

const mapStateToProps = state => {
    return {
        population: state.inhabitants.population.filter(item => item.display), 
        age: state.filters.age, 
        loading: state.filters.loading 
      }
};

export default connect(mapStateToProps, null)(GnomeList);