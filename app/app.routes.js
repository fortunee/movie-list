routes.$inject = ['$urlRouterProvider'];

export default ($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
}
