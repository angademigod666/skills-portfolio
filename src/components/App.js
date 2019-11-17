import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Nav from './Nav'
import Dashboard from './dashboard/Dashboard';
import Projects from './projects/Projects';
import Contact from './contact/Contact';


import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';


const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  footer: {
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit * 6,
    // position: 'static',
    // bottom: 0,
  },
});




class App extends Component {
  componentDidMount() {
    //this.props.dispatch(handleInitialData())
  }
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <Nav />
          <div className='container'>
            <br />
            <br />
            <br />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contactMe' component={Contact} />
              <Route exact path="**" component={()=><Redirect to='/' />} />
            </Switch>
          </div>
          <footer className={classes.footer}>
            <Typography variant="h5" style={{color:'white'}} align="center" gutterBottom>
              <b>Angad Singh Bindra</b>
            </Typography>
            <Typography variant="h6" align="center" style={{color:'white'}} component="p">
              Connect with me on
            </Typography>


            <Grid container justify="center" alignItems="center">
                
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/angademigod666'>
                  <Avatar alt="GitHub link" src="GitHub-Mark-Light-64px.png" className={classes.bigAvatar} />
                </a>
                
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/angad666/'>
                  <Avatar alt="GitHub link" src="icons8-linkedin-64.png" className={classes.bigAvatar} />
                </a>
                
              </Grid>


          </footer>
        </Fragment>
      </Router>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);





