import React, { Component } from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';
import packageJson from '../package.json';
import Auth from './_services/Auth';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <BrowserRouter basename={packageJson.homepage}>
              <Routes login={Auth.isLoggedIn(true) !== ''} basename={packageJson.homepage} />
            </BrowserRouter>
          </Router>
      </ThemeProvider>
    );
  }
}
