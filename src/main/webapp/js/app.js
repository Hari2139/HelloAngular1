(function() {
	var app = angular.module("test", [ "ngRoute" ]);

	app.config(function($routeProvider) {
		// define routes
		$routeProvider.when("/main", {
			templateUrl : "main.html",
			controller : "MainController"
		}).when("/contact", {
			templateUrl : "contact.html",
			controller : "ContactController"
		}).otherwise({
			redirectTo : "/main"
		});
	});
}());