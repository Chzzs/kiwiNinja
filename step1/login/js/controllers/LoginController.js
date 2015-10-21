<<<<<<< HEAD
angular.module('loginApp').controller('loginCtrl',loginCrtFnt);
loginCrtFnt.$inject=['$scope','$log'];
function loginCrtFnt($scope, $log){
 $scope.logAuth = function() {
 $log.info('user login', $scope.user.login);
 $log.info('user pwd', $scope.user.pwd);
 };
}
=======
angular.module('loginApp').controller('loginController', ["$scope", "$log", loginControllerFunction]);

function loginControllerFunction($scope, $log) {
  $scope.logAuth = function() {
    $log.info('user login', $scope.user.login);
    $log.info('user password');
  };
}
>>>>>>> fbede8050cd1bddd477d08df4b01853feef5bdff
