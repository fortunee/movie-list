import './home.style.scss';

class homeCtrl {
    constructor($http) {
        'ngInject';
        angular.extend(this, {$http})
        // this._$http = $http;
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
    
}

export const homeComponent = {
    templateUrl: './app/components/home/home.template.html',
    controllerAs: "model",
    controller: homeCtrl,
    bindings: {
        home: '='
    }
}