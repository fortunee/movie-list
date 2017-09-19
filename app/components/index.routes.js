routes.$inject = ['$stateProvider'];

export const routes = ($stateProvider) => {
    $stateProvider
        .state('rootComponent', {
            url: '/',
            templateUrl: './app/components/index.html',
        });
}
