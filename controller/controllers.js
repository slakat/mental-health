angular.module("App.controllers", [])

.controller('view1Controller', function($scope) {
  $scope.cssClass = 'view1';
})

.controller('view2Controller', function($scope) {
  $scope.cssClass = 'view2';
});
