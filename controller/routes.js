(function() {

    "use strict";

    var App = angular.module("App", [
        "ui.router",
        "ngAnimate"
    ]);


    App.config(function($stateProvider) {
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

}());
