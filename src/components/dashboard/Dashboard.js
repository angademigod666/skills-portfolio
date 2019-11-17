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
    marginLeft: theme.spacing.unit * 0.5,
    marginRight: theme.spacing.unit * 0.5,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 10,
      marginRight: theme.spacing.unit * 10,
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
    marginBottom: theme.spacing.unit * 3,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,

    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
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
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
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
        {/* <Toolbar className={classes.toolbarMain}>
          <Button size="small">Subscribe</Button>
          <Typography component="h2"variant="h5" color="inherit" 
          align="center" noWrap className={classes.toolbarTitle}>
            Blog
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Toolbar> */}
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

                  {/* <Typography variant="h6" color="inherit" paragraph>
                    I love combining my passion for teaching with my software development skills.
                    I enjoy learning new skills to enhance my repertoire by building personalized learning techniques and applications for various prerequisite skill levels.
                  </Typography> */}
                </div>
              </Grid>
            </Grid>
          </Paper>


        </header>



        <main>
          {/* Main featured post */}
          {/* End main featured post */}
          {/* Sub featured posts */}

          <Grid container spacing={40} className={classes.cardGrid}>
            <Grid item key={1} xs={12} md={6}>
              <DetailedExpansionPanel post={appData.education} />
            </Grid>
            <Grid item key={2} xs={12} md={6}>
              <DetailedExpansionPanel post={appData.technical} />
            </Grid>
          </Grid>

          <Grid container spacing={40} className={classes.cardGrid}>
            <Grid item key={1} xs={12} md={6}>
              <DetailedExpansionPanel post={appData.abilities} />
            </Grid>
            <Grid item key={2} xs={12} md={6}>
              <DetailedExpansionPanel post={appData.experience} />
            </Grid>
          </Grid>


          {/* <Grid container spacing={40} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <BarChartDemo barChartData={post.barChartData} />
              </Grid>
            ))}
          </Grid> */}





          {/*

          <Grid container spacing={40} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </Grid>
            ))}
          </Grid>
*/}

          {/* End sub featured posts */}


          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>


            </Grid>
            {/* End main content */}


            {/* Sidebar */}
            {/* <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                  amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
              </Paper>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archives
              </Typography>
              {archives.map(archive => (
                <Typography key={archive}>{archive}</Typography>
              ))}
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              {social.map(network => (
                <Typography key={network}>{network}</Typography>
              ))}
            </Grid> */}
            {/* End sidebar */}



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
