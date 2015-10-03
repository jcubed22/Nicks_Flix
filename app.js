var nicksflix = angular.module('nicksflix', ['ui.router']);

nicksflix.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('splash', {
    url: '',
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/splash.html'
      }
    }
  });

  $stateProvider.state('home', {
    url: 'home',
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/home.html',
        controller: 'ReviewsCtrl'
      }
    }
  });
});
