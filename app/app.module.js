import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './app.routes.js';

angular.module('MovieLiist', [uiRouter])
    .config(routes);
