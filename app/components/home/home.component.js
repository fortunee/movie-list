import './home.style.scss';

class homeCtrl {
    constructor() {
        this.message = 'home controller as VM';
    }
}

export const homeComponent = {
    templateUrl: './app/components/home/home.template.html',
    controllerAs: "vm",
    controller: homeCtrl,
    bindings: {
        home: '='
    }
}