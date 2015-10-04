var eshopApp = angular.module('eshopApp', ['ui.router']);

eshopApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise("/");
  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "pages/home.html",
    controller: "homeCtrl"
  })
  .state('orders', {
    url: "/orders",
    templateUrl: "pages/orders.html"
  })

}]);

eshopApp.controller('homeCtrl', ['$scope', function($scope) {

}]);