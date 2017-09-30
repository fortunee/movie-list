class NavBarCtrl {
    constructor() {
        'ngInject';
        angular.extend(this);
    }
}

export const navBarComponent = {
    templateUrl: './app/components/shared/navbar.template.html',
    controllerAs: 'model',
    controller: NavBarCtrl,
    bindings: {
        title: '<'
    }
}
