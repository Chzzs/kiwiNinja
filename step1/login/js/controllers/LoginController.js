angular.module('loginApp').controller('loginController', ["$scope", "$log", loginControllerFunction]);

function loginControllerFunction($scope, $log) {
  $scope.logAuth = function() {
    $log.info('user login', $scope.user.login);
    $log.info('user password');
  };
}
