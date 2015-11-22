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
	  $scope.user = null;

	  $rootScope.$on('auth:validation-success', function (ev, user) {
		  $scope.user = user;
	  });

	  $rootScope.$on('auth:login-success', function (ev, user) {
		  $scope.user = user;
	  });

	  $rootScope.$on('auth:logout-success', function (ev, user) {
		  $scope.user = null;
	  });

	  $scope.tabs = [
	  	{
			caption: 'Main',
	  		route: '/'
		},
	  	{
			caption: 'Questions',
	  		route: '/questions'
		},
	  	{
			caption: 'Ask Question',
	  		route: '/questions/add'
		},
	  	{
			caption: 'Login',
	  		route: '/login',
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
		},
	  	{
			caption: 'About',
	  		route: '/about'
		}
	  ];

	  $scope.tabs.forEach(function(tab) {
		  tab.isActive = function() {
			  return tab.route === $location.path();
		  }
	  });
	  
	  $scope.visible = function(tab) {
		  if ('logged' in tab) {
			  return ($scope.user !== null) == tab.logged; 
		  }

		  return true;
	  }

	  $scope.hasAction = function (tab) {
		  return 'action' in tab;
	  }
  });
