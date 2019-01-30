import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import GroupIcon from '@material-ui/icons/Group';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const classes={
    root: {
        textAlign: 'center'
    }
}
const GnomeDetail = ({item}) => (
    
    <List className={classes.root}>
      <ListItem>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText primary={item.name} />
      </ListItem>
      <li>
        <Divider variant="inset" />
      </li>
      <ListItem>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <ListItemText primary="Professions" secondary={item.professions} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <Avatar>
          <GroupIcon/>
        </Avatar>
        <ListItemText primary="Friends" secondary={item.friends} />
      </ListItem>
    </List>
);

GnomeDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GnomeDetail);