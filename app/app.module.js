import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './app.config.js';

angular.module('MovieLiist', [uiRouter])
    .config(config);
