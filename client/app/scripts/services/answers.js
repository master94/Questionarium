'use strict';

/**
 * @ngdoc function
 * @name questionariumClientApp.factory:Answer
 * @description
 * # Answer
 * Answers API-consuming service
 */

angular.module('questionariumClientApp')
.factory('Answer', function ($resource) {
	return $resource('/api/answers/:id');
});
