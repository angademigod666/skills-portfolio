import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';


import { withStyles } from '@material-ui/core/styles';


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
      width: 1350,
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
});



const projectsData = {

  projects: {
    0: {
      id: 0,
      title: 'The NASApp',
      summary: 'In the NASApp, NASA data, like imagery, color analysis, accessible to astronomy enthusiasts. The media catalog is growing everyday.',
      thumbnail: 'projectScreens/APOD.PNG',
      liveURL: 'https://nasa-pwa-app.firebaseapp.com',
    },
    1: {
      id: 1,
      title: 'My Reads',
      summary: 'In the MyReads project, I have created a bookshelf app that allows users, to select and categorize books they have read, are currently reading, or want to read.',
      thumbnail: 'projectScreens/MyReads.PNG',
      liveURL: 'https://my-reads-pwa.firebaseapp.com',
    },
    2: {
      id: 2,
      title: 'Would you rather?',
      summary: 'The "Would You Rather?" Project, is a web app that lets a user play the “Would You Rather?” game.',
      thumbnail: 'projectScreens/WouldYouRather.PNG',
      liveURL: 'https://wouldyouratherreactpwa.firebaseapp.com/login',
    },
    3: {
      id: 3,
      title: 'Udaci Cards - Mobile App',
      summary: 'The UdaciCards project is a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app is built using React-Native.',
      thumbnail: 'projectScreens/UdaciCards.PNG',
      liveURL: 'https://expo.io/@angademigod666/mobile-flashcards/builds',
    },
    4: {
      id: 4,
      title: 'Would you rather? - Mobile first - PWA',
      summary: 'The Would you rather app deployed as a PWA.',
      thumbnail: 'projectScreens/WouldYouRather-PWA.jpg',
      liveURL: 'https://wouldyouratherreactpwa.firebaseapp.com/login',
    },
    5: {
      id: 5,
      title: 'Skills portfolio',
      summary: 'The app describes my skills and abilities. The app is built with React, and follows Google\'s material guidelines.',
      thumbnail: 'projectScreens/MySkillsApp.PNG',
      liveURL: 'https://angad-skills-app.firebaseapp.com',
    },
    6: {
      id: 5,
      title: 'My Reads - Mobile first PWA',
      summary: 'The My Reads app deployed as a PWA.',
      thumbnail: 'projectScreens/MyReads-PWA.jpg',
      liveURL: 'https://my-reads-pwa.firebaseapp.com',
    },

  },

};


function Projects(props) {
  const { classes } = props;

  const projects = projectsData.projects;

  return (
    <Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="secondary" gutterBottom>
              My Projects
            </Typography>
            <Typography variant="h6" align="center" color="primary" paragraph>
              The area showcases the projects that I am currently working on. Click on more, to know more
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {projects && Object.keys(projects).map((card, key) => (
              <Grid item key={key} sm={6} md={6} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={projects[card].thumbnail}
                    title={projects[card].title}
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
                      <a target="_blank" rel="noopener noreferrer" href={projects[card].liveURL}>View live</a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </Fragment>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
