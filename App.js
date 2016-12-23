(function() {

    "use strict";

    var App = angular.module("App", [
        "App.controllers",
        "App.services",
        "App.directives",
        "App.filters",
        "ngRoute",
        "ngResource",
        "ui.router",
        "ngAnimate"
    ]);

    App.run(function($state, $rootScope) {

        });

    App.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/view1', {
                templateUrl: 'view/view1.html',
                controller: 'view1Controller'
            }).
            when('/view2', {
                templateUrl: 'view/view2.html',
                controller: 'view2Controller'
            }).
            otherwise({
                redirectTo: 'view/view1'
            });
        }]);


}());
