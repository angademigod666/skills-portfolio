import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { BarChartDemo } from './BarChart';


// import Chip from '@material-ui/core/Chip';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
// import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Hidden from '@material-ui/core/Hidden';
// import { Divider } from '@material-ui/core';
// import classNames from 'classnames';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  expansionPanel: {
    backgroundColor: theme.palette.primary.light,
  },
  details: {
    alignItems: 'center',
    width: 'auto',
    
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
  column: {
    flexBasis: '50%',
  },
  columnDetails: {
    flexBasis: '50%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    alignItems: 'auto'
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function DetailedExpansionPanel(props) {
  const { classes, post } = props;
  return (
    <div className={classes.root}>
      {/* <ExpansionPanel defaultExpanded> */}
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography color="secondary" className={classes.heading}>{post.title}</Typography>
          </div>
          <div className={classes.column}>
            {/* {Object.keys(post.summary).map((key)=>(
            <Typography key={key} variant="subtitle1">
              {post.summary[key]}
            </Typography>
          ))} */}
            <Typography color="secondary" variant="subtitle1">{post.summary[0]}
            </Typography>

          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>

          {/* <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {post.date}
                  </Typography> */}
          {/* <Typography variant="subtitle1" paragraph>
            {JSON.stringify(post.description)}
          </Typography>
          <Divider/> */}
          <ul>
            {Object.keys(post.description).map((key) => (
              <li key={key}>
                {typeof post.description[key] === 'string' ? (
                  <Typography color="primary" variant="subtitle1" paragraph>{post.description[key]}</Typography>
                ) : (
                    Object.keys(post.description[key]).map((key2) =>
                      typeof post.description[key][key2] === 'string' ? (
                        <Typography color="primary" key={key2} variant="subtitle1" paragraph>
                          {post.description[key][key2]}
                        </Typography>
                      ) : (
                          <ul key={key2}>
                            {Object.keys(post.description[key][key2]).map((key3) => (
                              <li key={key3}>
                                <Typography color="secondary" variant="subtitle1" paragraph>{post.description[key][key2][key3]}</Typography>
                              </li>
                            ))}
                          </ul>
                        )
                    ))}
              </li>
            ))}
          </ul>

          {post.barChartData && (
            <Grid container>
              <Grid item md={12}>
                <BarChartDemo barChartData={post.barChartData} />
              </Grid>
            </Grid>
          )}

          {/* <div className={classNames(classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div> */}


          {/* <div className={classes.column}>
            <Chip label="Barbados" className={classes.chip} onDelete={() => { }} />
          </div> */}

        </ExpansionPanelDetails>
        {/* <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions> */}
      </ExpansionPanel>
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);
