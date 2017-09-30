class MovieRatingCtrl {
    constructor() {
        'ngInject';
        angular.extend(this);
        this.entries;
        this.value;
        this.maxRating;
    }

    $onInit() {
        this.entries = new Array(this.maxRating)
    }

    $onChanges() {
        this.entries = new Array(this.maxRating)
    }
}

export const movieRatingComponent = {
    templateUrl: './app/components/shared/move-rating.template.html',
    transclude: true,
    controllerAs: 'mvMovieRating',
    controller: MovieRatingCtrl,
    bindings: {
        value: "<",
        maxRating: '<'
    }
}