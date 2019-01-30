import React, {Component} from 'react';
//import GnomeDetail from './GnomeDetail';




import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      display: 'flex',
    }
});    

class GnomeList extends Component{
    constructor(props){
        super(props);
        console.log('constructor: ');
        console.log(props);
    }
    render(props){
        console.log('render: ' + props);
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {/*this.props.population.length && this.props.population.map(item => <GnomeDetail item={item}/>)*/}   
            </div>
        );
    }
} 

export default withStyles(styles, { withTheme: true })(GnomeList);