'use strict';

/**
 * @ngdoc function
 * @name questionariumClientApp.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the questionariumClientApp
 */
angular.module('questionariumClientApp')
  .controller('TabsCtrl', function ($scope, $auth, $location, $rootScope) {
	  $rootScope.user = null;

	  $rootScope.$on('auth:validation-success', function (ev, user) {
		  $rootScope.user = user;
	  });

	  $rootScope.$on('auth:login-success', function (ev, user) {
		  $rootScope.user = user;
	  });

	  $rootScope.$on('auth:logout-success', function (ev, user) {
		  $rootScope.user = null;
	  });

	  $scope.tabs = [
	  	{
			caption: 'Questions',
	  		route: '/questions'
		},
	  	{
			caption: 'Ask Question',
	  		route: '/questions/add'
		},
	  	{
			caption: 'About',
	  		route: '/about'
		},
		{
			delimiter: true
		},
	  	{
			caption: 'Login',
	  		route: '/login',
			logged: false
		},
	  	{
			caption: 'Register',
	  		route: '/register',
			logged: false
		},
	  	{
			caption: 'Logout',
			logged: true,
			action: function () {
				$auth.signOut()
					.then(function (resp) {})
					.catch(function (resp) {});
				$location.path('/');
			}
		}
	  ];

	  $scope.tabs.forEach(function(tab) {
		  tab.isActive = function() {
			  return tab.route === $location.path();
		  }
	  });
	  
	  $scope.visible = function(tab) {
		  if ('logged' in tab) {
			  return ($rootScope.user !== null) == tab.logged; 
		  }

		  return true;
	  }

	  $scope.isDelimiter = function(tab) {
		  return 'delimiter' in tab;
	  }

	  $scope.hasAction = function (tab) {
		  return 'action' in tab;
	  }
  });
