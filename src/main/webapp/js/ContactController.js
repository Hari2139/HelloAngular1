(function() {
	var app = angular.module("test");

	var ContactController = function($scope) {
		$scope.name = "Test";
		$scope.address = {
			line1 : "1 Main St",
			line2 : "Apt 123",
			city : "Sacramento",
			state : "CA"
		};
		$scope.phone = "123-456-7890";
	};

	app.controller("ContactController", ContactController);
}());