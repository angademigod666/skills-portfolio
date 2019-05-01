import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';


import { withStyles } from '@material-ui/core/styles';

import icon from '../../assets/favicon.ico';




const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: theme.palette.primary.dark
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.light,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});



const projectsData = {

  projects: {
    1 : {
      id: 1,
      title: 'My Reads',
      summary: 'In the MyReads project, I have created a bookshelf app that allows users, to select and categorize books they have read, are currently reading, or want to read.',
      thumbnail: '',
      liveURL: 'https://wouldyouratherreactpwa.firebaseapp.com/login',
    },
    2: {
      id: 2,
      title: 'Would you rather?',
      summary: 'The "Would You Rather?" Project, is a web app that lets a user play the “Would You Rather?” game.',
      thumbnail: '',
      liveURL: 'https://wouldyouratherreactpwa.firebaseapp.com/login',
    },
    3: {
      id: 3,
      title: 'Udaci Cards - Mobile App',
      summary: 'The UdaciCards project is a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app is built using React-Native.',
      thumbnail: '',
      liveURL: 'https://wouldyouratherreactpwa.firebaseapp.com/login',
    },
    4: {
      id:4,
      title: 'Would you rather? - Mobile ready - PWA',
      summary: 'The Would you rather app deployed as a PWA.',
      thumbnail: '',
      liveURL: 'https://wouldyouratherreactpwa.firebaseapp.com/login',
    },
    5: {
      id: 5,
      title: 'Skills portfolio',
      summary: 'The app describes my skills and abilities. The app is built with React, and follows Google\'s material guidelines.',
      thumbnail: '',
      liveURL: 'https://wouldyouratherreactpwa.firebaseapp.com/login',
    },

  },

};


function Projects(props) {
  const { classes } = props;

  const projects = projectsData.projects;

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography  component="h1" variant="h2" align="center" color="secondary" gutterBottom>
              My Projects
            </Typography>
            {/* <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography> */}
            <Typography  variant="h6" align="center" color="primary" paragraph>
              The area showcases the projects that I am currently working on. Click on more, to know more
            </Typography>


            {/* <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}


          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {Object.keys(projects).map( (card,key) => (
              <Grid item key={key} sm={6}  md={6} lg={4}>
                <Card className={classes.card}>
                  
                  <CardMedia
                    className={classes.cardMedia}
                    //image={card.thumbnail}
                    image = {icon}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography color="secondary" gutterBottom variant="h5" component="h1">
                      {projects[card].title}
                    </Typography>
                    <Typography color="primary">
                      {projects[card].summary}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="secondary" variant="contained" size="small">
                      More
                    </Button>
                    <Button color="secondary" variant="outlined" size="small">
                      <a href={projects[card].liveURL}>View live</a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
