'use strict';

/**
 * @ngdoc function
 * @name questionariumClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the questionariumClientApp
 */
angular.module('questionariumClientApp')
  .controller('QuestionsCtrl', function ($scope) {
    $scope.questions = [
      'Question1',
      'Question2',
      'Question3'
    ];
  });
