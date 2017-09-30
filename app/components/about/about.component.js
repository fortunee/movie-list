class AboutCtrl {
    constructor() {
        'ngInject';
        angular.extend(this);
    }
}


export const aboutComponent = {
    templateUrl: './app/components/about/about.template.html',
    controllerAs: 'model',
    controller: AboutCtrl
}