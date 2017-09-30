class MovieRatingCtrl {
    constructor() {
        'ngInject';
        angular.extend(this);
        this.entries;
        this.value;
        this.maxRating;
    }

    $onInit() {
        this.entries = this.buildEntries(this.value, this.maxRating);
    }

    $onChanges() {
        this.entries = this.buildEntries(this.value, this.maxRating);
    }

    buildEntries(value, max) {
        let entries = [];
        for(let i = 1; i <= max; i++) {
            let icon = i <= value ? 'glyphicon-star' : 'glyphicon-star-empty';
            entries.push(icon)
        }
        return entries;
    }
}

export const movieRatingComponent = {
    templateUrl: './app/components/shared/move-rating.template.html',
    transclude: true,
    controllerAs: 'mvMovieRating',
    controller: MovieRatingCtrl,
    bindings: {
        value: '<',
        maxRating: '<',
        setRating: '&'
    }
}
