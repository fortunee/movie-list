import './movies.style.scss';

class MoviesCtrl {
    constructor($http) {
        'ngInject';
        angular.extend(this, {
            $http
        })
        this.movies = [];
    }

    $onInit() {
        this.message = 'foo';
        this.fetchMovies().then((movies) => {
            this.movies = movies;
        })
    }

    fetchMovies() {
        return this.$http.get('api/movies.json')
            .then((res) => {
                return res.data;
            });
    }

    rateUp(movie) {
        if (movie.rating < 5) {
            movie.rating += 1;
        }
    }

    rateDown(movie) {
        if (movie.rating > 1) {
            movie.rating -= 1;
        }
    }

}

export const moviesComponent = {
    templateUrl: './app/components/movies/movies.template.html',
    controllerAs: "model",
    controller: MoviesCtrl,
    bindings: {
        home: '='
    }
}