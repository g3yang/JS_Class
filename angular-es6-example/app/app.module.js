import angular from 'angular';
import uirouter from 'angular-ui-router';
import example from './example/example.module';
import fancy from './fancy/fancy.module';

require('./main.scss');
angular.module('app', [
  uirouter,
  'fancy'
]);
