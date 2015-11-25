'use strict';

/**
 * @ngdoc function
 * @name questionariumClientApp.controller:QuestionDetailsCtrl
 * @description
 * # QuestionDetailsCtrl
 * Controller of the questionariumClientApp
 */
angular.module('questionariumClientApp')
  .controller('QuestionDetailsCtrl', function ($scope, $routeParams, Question, Answer) {
	  Question.get({ id: $routeParams.questionId }, function(data) {
		  $scope.question = data;
	  });

	  $scope.submit = function() {
		  $scope.answer.question_id = $scope.question.id;
		  Answer.save($scope.answer);
	  }
  });
