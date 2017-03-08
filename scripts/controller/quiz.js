myApp.controller('QuizCtrl',function($scope,$http){
	$http.get('static-data/questions.json').then(function(response){
		$scope.content=response.data;
	});

});