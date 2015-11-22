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
    'ngTouch',
    'ng-token-auth'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/questions'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
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
      .when('/questions/add', {
        templateUrl: 'views/question-add.html',
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
  })
  .config(function ($authProvider) {
	  $authProvider.configure({
		  apiUrl: '/api'
	  });
  });
