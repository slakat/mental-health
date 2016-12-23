angular.module("App", [
    "App.controllers",
    "App.services",
    "App.directives",
    "App.filters",
    "ngRoute",
    "ngResource",
    "ui.router",
    "ngAnimate"
  ])

  .run(function($state, $rootScope) {
        $state.go('view1');
    })

  .config(function($stateProvider) {
    $stateProvider
        .state('view1', {
          url: '/view1',
            controller: 'view1Controller',
          templateUrl: '/view/view1.html'
        })
        .state('view2', {
          url: '/view2',
            controller: 'view1Controller',
          templateUrl: '/view/view2.html'
        });
  })

