config.$inject = ['$urlRouterProvider'];

export const config = ($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
}
