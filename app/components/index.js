import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './index.routes';

import { homeComponent } from './home/home.component';

import './index.style.scss';

export default angular.module('App.components', [uiRouter])
    .config(routes)
    .component('homeComponent', homeComponent)
    .name
