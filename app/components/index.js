import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './index.routes';

import { homeComponent } from './home/home.component';
import { movieRatingComponent } from './shared/move-rating.component';
import { navBarComponent } from './shared/navbar.component';
import { footerComponent } from './shared/footer.component';

import './index.style.scss';

export default angular.module('App.components', [uiRouter])
    .config(routes)
    .component('homeComponent', homeComponent)
    .component('movieRatingComponent', movieRatingComponent)
    .component('navBarComponent', navBarComponent)
    .component('footerComponent', footerComponent)
    .name
