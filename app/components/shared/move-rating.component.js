class MovieRatingCtrl {
    constructor() {
        'ngInject';
        angular.extend(this);
        this.entries;
        this.value;
    }

    $onInit() {
        this.entries = new Array(this.value)
    }

    $onChanges() {
        this.entries = new Array(this.value)
    }
}

export const movieRatingComponent = {
    templateUrl: './app/components/shared/move-rating.template.html',
    transclude: true,
    controllerAs: 'mvMovieRating',
    controller: MovieRatingCtrl,
    bindings: {
        value: "<",
    }
}