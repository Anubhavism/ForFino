myApp.controller('ResultCtrl',function($scope,dataService){
	$scope.data=dataService;
	// $scope.check=function(id){
	// 	if(data.answers[id]==obj.content[id].correct)
	// 		return 'correct';
	// 	else 
	// };
	$scope.setColor=function(option,question){
		if(option.id==$scope.data.answers[question.id-1] && option.id==question.correct)
			return "correct";
		if(option.id==$scope.data.answers[question.id-1] && option.id!=question.correct)
			return "wrong";
		if(option.id==question.correct)
			return "correct";
	};
});
