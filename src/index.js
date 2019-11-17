import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e5ffff',
      main: '#00796b',
      dark: '#80cbc4',
      contrastText: '#ffcc00',
    },
    secondary: {
      main: '#b71c1c',
      light: '#ffa4a2',
      dark: '#af4448',
      contrastText: '#ffcc00',
    },

  },
  status: {
    danger: 'orange',
  },
  typography: { useNextVariants: true },
});

ReactDOM.render(

    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
