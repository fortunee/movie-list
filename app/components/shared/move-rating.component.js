class movieRatingCtrl {
    constructor() {
        'ngInject';
        angular.extend(this);
    }
}

export const movieRatingComponent = {
    templateUrl: './app/components/shared/move-rating.template.html',
    controllerAs: 'mvMovieRating',
    controller: movieRatingCtrl
}