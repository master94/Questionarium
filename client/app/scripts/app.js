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
    'ng-token-auth',
    'angularUtils.directives.dirPagination'
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
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
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
      .when('/404', {
        templateUrl: 'views/errors/404.html'
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
