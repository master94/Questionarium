'use strict';

/**
 * @ngdoc function
 * @name questionariumClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the questionariumClientApp
 */
angular.module('questionariumClientApp')
  .controller('QuestionsCtrl', function ($scope, $location, Question) {
	  Question.query(function(data) {
		  $scope.questions = data;
	  });

	  $scope.submit = function() {
		  var question = new Question();
		  question.caption = $scope.question.caption;
		  question.text = $scope.question.text;

		  question.$save(function (resp) {
			  if (!resp.error_message) {
				  $location.url('/questions/' + resp.id.toString());
			  }
		  });
	  }
  });
