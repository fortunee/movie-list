import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './index.routes';

import { moviesComponent } from './movies/movies.component';
import { aboutComponent } from './about/about.component';

import { movieRatingComponent } from './shared/move-rating.component';
import { navBarComponent } from './shared/navbar.component';
import { footerComponent } from './shared/footer.component';

import './index.style.scss';

export default angular.module('App.components', [uiRouter])
    .config(routes)
    .component('moviesComponent', moviesComponent)
    .component('aboutComponent', aboutComponent)
    .component('movieRatingComponent', movieRatingComponent)
    .component('navBarComponent', navBarComponent)
    .component('footerComponent', footerComponent)
    .name
