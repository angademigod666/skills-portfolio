import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ContactMail from '@material-ui/icons/ContactMail';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
//import { FormErrors } from './FormErrors';

import * as emailjs from 'emailjs-com';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    backgroundColor: theme.palette.primary.light,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});





class Contact extends React.Component {

  // User ID: user_cxeq8twUOPJzxrLcTJnlc
  // Access token: 28039918b8eaeb6dd3bcdadd8d7095a1

  // <YOUR SERVICE ID>: gmail


  // google reCaptcha - Site key: 6LenAaMUAAAAAFQ7w2XyL3bKXJe6VYQdJAMd_iTC
  // google reCaptcha - Secret Key: 6LenAaMUAAAAADAxEmUFLd0eXDm3rdMy6SS113kE

  formSubmit=(e)=> {
    e.preventDefault();
    console.log(typeof e.target);
    

    emailjs.sendForm('gmail', 'template_FMo0TPps', e.target, 'user_cxeq8twUOPJzxrLcTJnlc')
      .then((response) => {
        console.log('EMail Sent!! - SUCCESS!', response.status, response.text);
      })
      .catch(e => {
        console.log('EMail FAILED...', e);
      });




  }

  state = {
    name: '',
    email: '',
    organization: '',
    message: '',

    formErrors: { name: '', email: '', organization: '', message: '' },

    emailValid: false,
    nameValid: false,
    organizationValid: false,
    messageValid: false,

    formValid: false
  };

  handleChange=(e)=> {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => {
        this.validateField(name, value);
      }
    );

  }

  validateField=(fieldName, value)=> {
    let fieldValidationErrors = this.state.formErrors;

    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let organizationValid = this.state.organizationValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'name':
        nameValid = value.length >= 6;
        fieldValidationErrors.name = nameValid ? '' : ' is too short';
        break;
      case 'organization':
        organizationValid = value.length >= 6;
        fieldValidationErrors.organization = organizationValid ? '' : ' is too short';
        break;
      case 'message':
        messageValid = value.length >= 6;
        fieldValidationErrors.message = messageValid ? '' : ' is too short';
        break;

      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid,
      nameValid,
      organizationValid,
      messageValid,
    }, this.validateForm());
  }

  validateForm=()=> {
    this.setState({
      formValid: (this.state.emailValid &&
        this.state.nameValid &&
        this.state.messageValid &&
        this.state.organizationValid)
    });
  }



  render=()=> {
    const { classes } = this.props;
    
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ContactMail />
          </Avatar>
          <Typography color="secondary" component="h1" variant="h5">
            Contact me
        </Typography>
          <form className={classes.form} onSubmit={(event) => this.formSubmit(event)}>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input value={this.state.name} onChange={(event) => this.handleChange(event)}
                id="name" name="name" type="text" autoComplete="name" autoFocus />
              <Typography color="secondary" variant="subtitle2">
                {this.state.formErrors.name}
              </Typography>
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input value={this.state.email} onChange={(event) => this.handleChange(event)}
                id="email" name="email" type="email" autoComplete="email" />
              <Typography color="secondary" variant="subtitle2">
                {this.state.formErrors.email}
              </Typography>
            </FormControl>


            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="organization">Your employer / organization</InputLabel>
              <Input value={this.state.organization} onChange={(event) => this.handleChange(event)}
                name="organization" type="text" id="organization" />
              <Typography color="secondary" variant="subtitle2">
                {this.state.formErrors.organization}
              </Typography>
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="message">Message</InputLabel>
              <Input value={this.state.message} onChange={(event) => this.handleChange(event)}
                name="message" type="textArea" id="message" />
              <Typography color="secondary" variant="subtitle2">
                {this.state.formErrors.message}
              </Typography>
            </FormControl>

            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              disabled={!this.state.formValid}
            >
              Show interest!
          </Button>
          </form>
        </Paper>

        <br />

      </main>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
