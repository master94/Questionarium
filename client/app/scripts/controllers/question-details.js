'use strict';

/**
 * @ngdoc function
 * @name questionariumClientApp.controller:QuestionDetailsCtrl
 * @description
 * # QuestionDetailsCtrl
 * Controller of the questionariumClientApp
 */
angular.module('questionariumClientApp')
  .controller('QuestionDetailsCtrl', function ($scope, $routeParams, Question) {
	  Question.get({ id: $routeParams.questionId }, function(data) {
		  $scope.question = data;
	  });
  });
