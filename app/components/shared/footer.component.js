class FooterCtrl {
    constructor() {
        'ngInjecgt';
        angular.extend(this);
    }
}

export const footerComponent = {
    templateUrl: './app/components/shared/footer.template.html',
    controllerAs: 'model',
    controller: FooterCtrl
}