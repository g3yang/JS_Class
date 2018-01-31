
const routes = ($stateProvider, $urlRouterProvider)=>{
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.when('/', '/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/fancy/views/home.html',
            controller:'HomeCtrl as home'
        })
        .state('home.list', {
          url: '/list',
          templateUrl: 'app/fancy/views/countries.html',
          controller: 'CountriesCtrl as countriesCtrl'
        })
        .state('home.paragraph', {
          url: '/paragraph',
          template: 'I could sure use a drink right now.'
        })
}
/* @ngInject */
export default routes;
