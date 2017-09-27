import './home.style.scss';

const homeCtrl = () => {
    const homeTitle = 'Home Controller!!!';
    console.log('Logging homeTitle::', homeTitle)
}

export const homeComponent = {
    templateUrl: './app/components/home/home.template.html',
    controller: homeCtrl,
    bindings: {
        home: '='
    }
}