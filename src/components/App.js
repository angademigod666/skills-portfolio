import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'
import Dashboard from './dashboard/Dashboard';
import Projects from './projects/Projects';
import Contact from './contact/Contact';


import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';


const styles = theme => ({
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
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { classes } = this.props;
    return (
      <Router>
        
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav/>
            <br/>
            <br/>
            <br/>
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/projects' exact component={Projects} />
                  <Route path='/contactMe' exact component={Contact} />
                  <Route path='/tweet/:id' component={TweetPage} />
                  <Route path='/new' component={NewTweet} />
                </div>
            }
          </div>
                {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
        </Fragment>
        
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)( withStyles(styles)(App) );





