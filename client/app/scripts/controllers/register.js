'use strict';

/**
 * @ngdoc function
 * @name questionariumClientApp.controller:RegisterCtrl
 * @description
 * #RegisterCtrl
 * Controller of the questionariumClientApp
 */
angular.module('questionariumClientApp')
  .controller('RegisterCtrl', function ($scope, $auth, $location) {
	  $scope.message = 'Please, enter regisration data';

	  $scope.register = function() {
		  $auth.submitRegistration($scope.credentials)
	  	    .then(function (resp) {
			    $auth.submitLogin({
				    email: $scope.credentials.email,
				    password: $scope.credentials.password
			    });
			    $location.path('/');
		    })
  		    .catch(function (resp) {
			    $scope.message = resp.data.errors.full_messages.join('\n');
		    });
	  }
  });
