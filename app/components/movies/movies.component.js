import './movies.style.scss';

class MoviesCtrl {
    constructor(MovieService) {
        'ngInject';
        angular.extend(this, {
            MovieService
        })
        this.movies = [];
    }

    $onInit() {
        this.message = 'foo';
        this.MovieService.fetchMovies().then((movies) => {
            this.movies = movies;
        })
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