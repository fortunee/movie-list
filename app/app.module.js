import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './app.routes';
import rootComponent from './components';

angular.module('MovieList', [uiRouter, rootComponent])
    .config(routes);
