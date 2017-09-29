routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('rootComponent', {
            url: '/',
            templateUrl: './app/components/index.template.html',
        })
        .state('homeComponent', {
            url: '/list',
            template: '<home-component></home-component>'
        });
}
