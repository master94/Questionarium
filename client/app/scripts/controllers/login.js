'use strict';

/**
 * @ngdoc function
 * @name questionariumClientApp.controller:LoginCtrl
 * @description
 * #LoginCtrl
 * Controller of the questionariumClientApp
 */
angular.module('questionariumClientApp')
  .controller('LoginCtrl', function ($scope, $auth, $location) {
	  $scope.loginMessage = 'Please, sign in';

	  $scope.login = function() {
		  $auth.submitLogin($scope.credentials)
	  	    .then(function (resp) {
			    $scope.loginMessage = 'Welcome, ' + resp.name;
			    $location.path('/');
		    })
  		    .catch(function (resp) {
			    $scope.loginMessage = 'Sorry, wrong credentials, try again';
		    });
	  }
  });
