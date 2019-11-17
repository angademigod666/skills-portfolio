import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <NavLink to='/' exact className={classes.grow}>
            <Typography variant="h6" color="default" >Home</Typography>
          </NavLink>
          <NavLink to='/projects' className={classes.grow}>
            <Typography variant="h6" color="default" >Projects</Typography>
          </NavLink>
          <NavLink to='/contactMe' className={classes.grow}>
            <Typography variant="h6" color="default">Contact me</Typography>
          </NavLink>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
