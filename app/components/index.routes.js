routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('rootComponentState', {
            url: '/',
            templateUrl: './app/components/index.template.html',
        })
        .state('moviesComponentState', {
            url: '/list',
            template: '<movies-component></movies-component>',
            // component: 'moviesComponent'
        })
        .state('aboutComponentState', {
            url: '/about',
            template: '<about-component></about-component>'
            // component: 'aboutComponent'
        })
}
