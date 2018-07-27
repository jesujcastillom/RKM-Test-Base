import * as angular from 'angular';
import { ResultService } from './result.service.ts';

export const CommonModule = angular.module('common', []);

CommonModule.service('resultService', ResultService);