class AboutCtrl {
    constructor() {
        'ngInject';
        angular.extend(this);
    }
}


export const aboutComponent = {
    templateUrl: './app/component/about/about.template.html',
    controllerAs: 'model',
    controller: AboutCtrl
}