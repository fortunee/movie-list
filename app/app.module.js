import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './app.config.js';
import rootComponent from './components';

angular.module('MovieList', [uiRouter, rootComponent])
    .config(config);
