import angular from 'angular';
import routes from './routes';
import HomeCtrl from './controllers/home.controller';
import selectAllOnFocus from './directives/selectAllOnFocus.directive';
import foo from './directives/foo.directive';

angular.module('fancy',[])
.config(routes)
.controller('HomeCtrl', HomeCtrl)
.directive('selectAllOnFocus',selectAllOnFocus)
.directive('foo',foo);