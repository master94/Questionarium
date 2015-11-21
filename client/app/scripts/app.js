'use strict';

/**
 * @ngdoc overview
 * @name questionariumClientApp
 * @description
 * # questionariumClientApp
 *
 * Main module of the application.
 */
angular
  .module('questionariumClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/questions', {
        templateUrl: 'views/questions.html',
        controller: 'QuestionsCtrl',
        controllerAs: 'questions'
      })
      .when('/questions/:questionId', {
        templateUrl: 'views/question-details.html',
        controller: 'QuestionDetailsCtrl',
        controllerAs: 'question-details'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
