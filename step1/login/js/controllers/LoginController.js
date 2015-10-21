
angular.module('loginApp').controller('loginController', ["$scope", "$log",'auth','$window', loginControllerFunction]);


function loginControllerFunction($scope, $log,auth,$window) {
  $scope.logAuth = function() {
    $log.info('user login', $scope.user.login);
    $log.info('user password');
  };

  $scope.logAuthObject = function(user) {
    $log.info('user login', user.login);
    $log.info('user list', auth.userList());
    $log.info('loggin result',auth.checkUser(user.login,user.pwd));
    if(auth.checkUser(user.login,user.pwd)){
    	$window.location.assign("loginSuccess.html");
    	
    }
    else{
    	 $window.alert("bad login");
    }
    

 };







}


