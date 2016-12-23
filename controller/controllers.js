(function() {

  "use strict";

  var App = angular.module("App.controllers", []);

  App.controller('view1Controller', function($scope) {
    $scope.cssClass = 'view1';
  });

  App.controller('view2Controller', function($scope) {
        $scope.cssClass = 'view2';
      });


}());