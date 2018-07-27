import $ from 'jquery';
import * as angular from 'angular';
import { ProblemComponent } from './problem.component';
import { ProblemState } from './problem.states';

export const ProblemModule = angular.module('problem', []);

ProblemModule.config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state('problem', ProblemState);
}]);

ProblemModule.component('problemComponent', ProblemComponent);