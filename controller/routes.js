(function() {

    "use strict";

    var App = angular.module("App", [
        "ui.router",
        "ngAnimate",
        "ngRoute"
    ]);

    App.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/view1', {
                templateUrl: 'view1.html',
                controller: 'view1Controller'
            }).
            when('/view2', {
                templateUrl: 'view2.html',
                controller: 'view2Controller'
            }).
            otherwise({
                redirectTo: '/view1'
            });
        }]);


}());
