import { moviesComponent } from './movies.component';

describe('Home Component', () => {

    beforeEach(angular.mock.module('MovieList'));
    // beforeEach(angular.mock.module('templates'));
    let element;
    let scope;

    beforeEach(angular.mock.inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        element = angular.element('<home-component home="{{input}}"></home-component>');
        element = $compile(element)(scope);
        scope.input = 'Welcome Home';
        scope.$digest();
        scope.$apply();
    }));

    it('Works', () => {
        let p = element.find('p');
        expect(p.text().toBe('Welcome Home'));
    })
})