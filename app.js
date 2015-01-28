/*********************
 * APP.JS
 * *******************/

angular.module("mainApp", [])
    .config( [
    "$urlRouterProvider",
    "$stateProvider",
    function ($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                abstract: true,
                url: "/",
                templateUrl: "partials/home.html",
                controller: "HomeController"
            });


    }] )
    .controller("HomeController", ["$scope", function($scope) {
        $scope.pageTitle = "Hello";
    }])
