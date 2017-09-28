import './home.style.scss';

class homeCtrl {
    constructor() {
        this.message = 'home controller as VM';
    }

    changeMessage() {
        this.message = 'Another message';
    }
}

export const homeComponent = {
    templateUrl: './app/components/home/home.template.html',
    controllerAs: "model",
    controller: homeCtrl,
    bindings: {
        home: '='
    }
}