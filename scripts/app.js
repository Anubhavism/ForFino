'use strict';

var myApp= angular.module('fino',[]);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'views/front.html'
		})
		.when('/quiz',{
			templateUrl: 'views/quiz.html',
			controller: 'QuizCtrl'
		})
		.when('/result',{
			templateUrl: 'views/result.html',
			controller: 'ResultCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}).run(['$rootScope',  function() {}]);
