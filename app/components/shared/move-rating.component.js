class movieRatingCtrl {
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
    controllerAs: 'mvMovieRating',
    controller: movieRatingCtrl,
    bindings: {
        value: "<",
    }
}