'use strict';

var myApp= angular.module('fino',[]);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'views/front.html',
			controller: 'MainCtrl'
		})
		.when('/quiz',{
			templateUrl: 'views/quiz.html',
			controller: 'QuizCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}).run(['$rootScope',  function() {}]);
