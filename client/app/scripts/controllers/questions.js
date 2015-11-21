'use strict';

/**
 * @ngdoc function
 * @name questionariumClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the questionariumClientApp
 */
angular.module('questionariumClientApp')
  .controller('QuestionsCtrl', function ($scope, Question) {
	  Question.query(function(data) {
		  $scope.questions = data;
	  });
  });
