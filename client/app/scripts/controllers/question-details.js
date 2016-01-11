'use strict';

/**
 * @ngdoc function
 * @name questionariumClientApp.controller:QuestionDetailsCtrl
 * @description
 * # QuestionDetailsCtrl
 * Controller of the questionariumClientApp
 */
angular.module('questionariumClientApp')
  .controller('QuestionDetailsCtrl', function ($scope, $routeParams, $location, $anchorScroll, Question, Answer) {
	  Question.get({ id: $routeParams.questionId }, function (data) {
		  $scope.question = data;
		  if ($location.hash()) {
			  $anchorScroll();
		  } 
	  },
	  function (error) {
		  console.log('Question query error');
		  $location.url('404');
	  });

	  $scope.path = function() {
		  return $location.path();
	  }

	  $scope.submit = function() {
		  var answer = new Answer();
		  answer.text = $scope.answer.text;
		  answer.question_id = $scope.question.id;
		  
		  answer.$save(function (resp) {
			  if (!resp.error_message) {
				 $scope.question.answers.push(resp);
				 $scope.answer = {};
			  }
		  });
	  }
  });
