routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './app/components/movies/movies.template.html'
        })
}