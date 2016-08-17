/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var sampleApp = angular.module('sampleApp', ['ngRoute']);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
		templateUrl: 'add_order.html',
		controller: 'AddOrderController'
	}).
      when('/ShowOrders', {
		templateUrl: 'show_order.html',
		controller: 'ShowOrdersController'
      }).
      otherwise({
		redirectTo: '/AddNewOrder'
      });
}]);


sampleApp.controller('AddOrderController', function($scope) {
	
	$scope.message = 'This is Add new order screen';
	
});

sampleApp.controller('ShowOrdersController', function($scope) {

	$scope.message = 'This is Show orders screen';

});


