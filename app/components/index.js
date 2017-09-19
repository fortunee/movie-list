import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './index.routes';

export default angular.module('App.components', [uiRouter])
    .config(routes)
    // .component()
    // .service()
    .name
