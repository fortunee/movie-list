import './home.style.scss';

class homeCtrl {
    constructor($http) {
        'ngInject';
        angular.extend(this, {$http})
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
        if(movie.rating < 5) {
            movie.rating += 1;
        }
    }
}

export const homeComponent = {
    templateUrl: './app/components/home/home.template.html',
    controllerAs: "model",
    controller: homeCtrl,
    bindings: {
        home: '='
    }
}