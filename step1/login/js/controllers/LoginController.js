angular.module('loginApp').controller('loginCtrl',loginCrtFnt); 

loginCrtFnt.$inject=['$scope','$log', 'auth', '$window']; 

function loginCrtFnt($scope, $log, auth, $window){ 
	
	$scope.logAuth = function() { 
		$log.info('user login', $scope.user.login); 
		$log.info('user pwd', $scope.user.pwd); 
	}; 
	
	$scope.checkUser = function(user)
	{
		if(auth.checkUser(user.login, user.pwd))
		{
			$log.info('user login', user.login); 
			$log.info('user pwd', user.pwd); 
			$window.location.href = "loginSuccess.html";
		}
		else
			$log.info('wrong combination login/pwd');
	}
	
	$scope.showUserList = function() {
		auth.userList().forEach(function(element) {
			$log.info(element);
		}, this);
	}
}