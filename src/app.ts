import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-ui-bootstrap';
import 'angular-toasty/dist/angular-toasty';
import { ProblemModule } from './problem/problem.module.ts';
import { CommonModule } from './common/common.module.ts';

export const AppModule = angular.module('app', [
    uiRouter,
    'ui.bootstrap',
    'angular-toasty',
    ProblemModule.name,
    CommonModule.name
]);
