import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {store} from '../../store';
import Nouislider from 'react-nouislider';
import wNumb from 'wnumb';
import './../../static/nouislider.css';
import * as at from './../../actions/actionCreators';
import styles from './styles';


    
  
class FilterAge extends Component {
   
    constructor(props){
       super();
       this.state=props.state;
       store.subscribe(()=>{
        
        this.setState({filters: store.getState().filters}); 
       });
    }

    onChange(value){
        const {dispatch} = this.props;
        dispatch(at.setAgeSelected(parseInt(value[0]), parseInt(value[1])));
    };

    render(){
        const{classes} = this.props;
        let max = 100;
        let min = 0;
        let from = min;
        let to = max;
        if(this.state.filters.age.max){ max = this.state.filters.age.max }
        if(this.state.filters.age.min){ min = this.state.filters.age.min }
        if(this.state.filters.age.from){ from = this.state.filters.age.from }
        if(this.state.filters.age.to){ to = this.state.filters.age.to }
        console.log(this.state);
       return(
            <div>   
                <Nouislider
                    classes={{ container: classes.slider }}
                    range={{min: min, max: max}}
                    start={[from, to]}
                    step={1} connect={true}
                    format={wNumb({decimals: 0, thousand: '', suffix: ''})}
                    tooltips onChange={this.onChange.bind(this)}/>
           </div>
       );        
    };

};

export default withStyles(styles)(FilterAge);