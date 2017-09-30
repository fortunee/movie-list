routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('rootComponentState', {
            url: '/',
            templateUrl: './app/components/index.template.html',
        })
        .state('moviesComponentState', {
            url: '/list',
            component: 'moviesComponent'
        })
        .state('aboutComponentState', {
            url: '/about',
            component: 'aboutComponent'
        })
}
