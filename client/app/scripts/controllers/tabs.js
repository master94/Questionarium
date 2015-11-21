'use strict';

/**
 * @ngdoc function
 * @name questionariumClientApp.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the questionariumClientApp
 */
angular.module('questionariumClientApp')
  .controller('TabsCtrl', function ($scope, $location) {
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
			caption: 'About',
	  		route: '/about'
		}
	  ];

	  $scope.tabs.forEach(function(tab) {
		  tab.isActive = function() {
			  return tab.route === $location.path();
		  }
	  });
  });
