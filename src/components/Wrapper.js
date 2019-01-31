import React, {Component} from 'react';
//import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
//import SearchAppBar from './SearchAppBar';


import Grid from '@material-ui/core/Grid';

import {store} from '../store';
import initialState from './../reducers/initialState';
import GnomeList from './GnomeList';
import FilterBar from './FilterBar/FilterBar';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends Component {

  state = initialState;

  constructor(){
    super();
    store.subscribe(()=>{
      this.setState({population: store.getState().inhabitants.population}); 
    });
  }

  
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  
  render() {
    const { classes, theme } = this.props;
    const drawer = (
      <div>
                Edad min<ListItemText primary={this.state.filters.age.min} />
                Edad max<ListItemText primary={this.state.filters.age.max} />
                Max friends<ListItemText primary={this.state.filters.qualifications.maxNumberOfFriends} />
                Max professions<ListItemText primary={this.state.filters.qualifications.maxNumberOfProfessions} />
                <select>
                  {this.state.filters.professions.options.map(item=>
                    <option key={item}>{item}</option>)}
                </select>    
                <select>
                  {this.state.filters.hair.options.map(item=>
                    <option key={item}>{item}</option>)}
                </select>            
          <Divider />
          <FilterBar state={this.state} dispatch={this.dispatch}/>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
            <Grid container spacing={24}>
              <GnomeList items={this.state.population}/>
            </Grid>
        </main>
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);