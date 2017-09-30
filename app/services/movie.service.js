export default class MovieService {
    constructor($http) {
        this.$http = $http;
    }

    fetchMovies() {
        const endPoint = 'api/movies.json';
        return this.$http.get(endPoint).then(res => res.data);
    }
}
