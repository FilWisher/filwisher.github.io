;(function() {
    "use strict";

    module.exports = [
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


    }

());
