import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ImageAvatars from './ImageAvatars';

import DetailedExpansionPanel from './Expansion';


const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up(1100 + theme.spacing(3*2))]: {
      width: 'auto',
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.light,
  },
  mainFeaturedPost: {
    //backgroundColor: theme.palette.grey[800],
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(3),
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing(6)}px`,

    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing(3)}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: `${theme.spacing(6)}px 0`,
  },
});


const appData = {

  sections: [
    'Mysuru - 570027, Karnataka, India',
    '+91-999-945-6508',
    'bindra.angadsingh@gmail.com',
    'angad-skills-app.firebaseapp.com',
  ],

  profile: {
    title: 'Profile',
    summary: { 0: 'Angad Singh Bindra ' },
    description: {
      0: 'Detail-oriented full stack developer with a proven track record of integrating passion for teaching with technical development skills. ',
      1: 'Demonstrated strong leadership skills and ability to deliver innovative implementations within tight deadlines. Great at time-management and communication. ',
      2: 'On a never-ending quest of learning to improve the programming process. '
    }
  },

  education: {
    title: 'Education',
    summary: { 0: 'View educational qualifications ' },
    description: {
      0: 'B.Tech – Computer Science and Engineering ',
      1: 'Guru Gobind Singh Indraprastha University, Delhi, India ',
      2: 'July 2011 – May 2015 ',
      3: 'Equivalent to: Bachelor\'s degree (4 yrs) ',
      4: {
        0: 'Certifications: ',
        1: [<a target='_blank' rel='noopener noreferrer' href='https://graduation.udacity.com/confirm/LSKLQCS'>Udacity's React Nanodegree</a>],
      },
    }
  },
  technical: {
    title: 'Technical skills',
    summary: { 0: 'View skills across various stacks ' },
    description: {},
    barChartData: {
      labels: ['Angular', 'React', 'MongoDB', 'SQL/MySQL', 'Node/Express', 'JavaScript', 'Python', 'Java', 'C/C++'],
      datasets: [
        {
          label: 'Skills levels across various technologies:',
          backgroundColor: '#42A5F5',
          data: [90, 90, 75, 70, 80, 95, 65, 80, 35]
        }
      ]
    }
  },
  abilities: {
    title: 'Skills and Abilities',
    summary: { 0: '', 1: '' },
    description: {
      0: {
        0: 'Great communication skills',
        1: 'Conducted regular training session for classes of up to 200 fresh graduates',
        2: 'Conducted training sessions in full stack development and Java for developers across various skill levels',
      },
      1: {
        0: 'Developed courseware using contemporary learning techniques to enhance learning experience across technologies',
        1: {
          0: 'Involved in development of intensive Project Based Learning models for courses in Java, Angular, CSS3, Python',
          1: 'Managed and contributed in adapting “Flight Simulator” learning model for courses in Spring Boot, Spring MVC, Angular, Bootstrap'
        },
      }
    },
  },

  experience: {
    title: 'Work experience',
    summary: {
      0: 'Infosys Limited - Mysore, India (July 2015 - present)',
    },
    description: {
      0: 'Member - Education, Training & Assessment',
      1: {
        0: 'Ideation, development and deployment of several MEAN and MERN full stack enterprise applications implementing all CRUD functionalities along the lines of:',
        1: {
          0: 'React and Redux used for the front-end which includes features like dynamic view updates, Material Design, Prime, and Bootstrap. The back-end, built using Node, Express, and MongoDB, implements well-developed RESTful APIs, geospatial data storage, and user authentication with Passport (OAuth etc).',
          1: 'Angular and React used in tandem to develop a robust front-end with Angular handling the model-controller aspect and React for view aspect of SPA - MVC architecture.'
        },
      },
      2: 'Delivered over 6000 sessions with over 80% learners successfully graduating in first attempt.',
      3: 'Received awards for courseware development and quality of training sessions.',
    },
  },

  management: {
    title: 'Management areas',
    summary: 'View educational qualifications',
    description: {
      A: 'Managed and mentored various batches of over 100 fresh graduated through 8-week training program',
      B: 'Mentored several internship projects as per Agile methodology; involving machine learning, NLP, and automated testing',
      C: 'Managed and coordinated a team of developers to ideate, build and enhance MEAN and MERN full-stack applications as per requirements collected to be used in training programs',
    },
  },
};

function Dashboard(props) {
  const { classes } = props;

  return (
    <Fragment>
      <div className={classes.layout}>
        <header>
          <Toolbar variant="dense" className={classes.toolbarSecondary}>
            {appData.sections.map(section => (
              <Typography color="inherit" noWrap key={section}>
                {section}
              </Typography>
            ))}
          </Toolbar>

          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={3}>
                <div className={classes.mainFeaturedPostContent}>
                  <ImageAvatars />
                </div>
              </Grid>
              <Grid item md={8}>
                <div className={classes.mainFeaturedPostContent}>
                  {Object.keys(appData.profile.summary).map((key) => (
                    <Typography key={key} component="h1" variant="h3" color="inherit" gutterBottom>
                      {appData.profile.summary[key]}
                    </Typography>
                  ))}


                  {Object.keys(appData.profile.description).map((key) => (
                    <Typography variant="h6" color="inherit" paragraph key={key}>
                      {appData.profile.description[key]}
                    </Typography>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Paper>
        </header>

        <main>
          <Grid container spacing={5} className={classes.cardGrid}>
            <Grid item key={1} xs={12} md={6}>
              <DetailedExpansionPanel post={appData.education} />
            </Grid>
            <Grid item key={2} xs={12} md={6}>
              <DetailedExpansionPanel post={appData.technical} />
            </Grid>
          </Grid>

          <Grid container spacing={5} className={classes.cardGrid}>
            <Grid item key={1} xs={12} md={6}>
              <DetailedExpansionPanel post={appData.abilities} />
            </Grid>
            <Grid item key={2} xs={12} md={6}>
              <DetailedExpansionPanel post={appData.experience} />
            </Grid>
          </Grid>
        </main>
      </div>
    </Fragment>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
