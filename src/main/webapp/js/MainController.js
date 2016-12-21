(function() {
	var app = angular.module("test");

	var MainController = function($scope) {
		$scope.name = "Test";
	};

	app.controller("MainController", MainController);
}());