'use strict';

/**
 * @ngdoc function
 * @name questionariumClientApp.factory:Question
 * @description
 * # Question
 * Questions API-consuming service
 */

angular.module('questionariumClientApp')
.factory('Question', function ($resource) {
	return $resource('/api/questions/:id');
});
