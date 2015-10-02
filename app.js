var nicksflix = angular.module('nicksflix', ['ui.router']);

nicksflix.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '',
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/home.html',
        controller: 'ReviewCtrl'
      }
    }
  });
});
