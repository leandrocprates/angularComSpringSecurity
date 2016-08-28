
var myController = angular.module('mainApp', ['ngSanitize']);

myController.controller("loginController", function ($scope,$http,$sce,$window )
{

    $scope.efetuarLogin = function(){
        console.log('Dentro de efetuar Login ') ; 
        
        $window.location.href = './home.html#/AddNewOrder';
    };
    
    init = function(){
        
    }
    
    init();
    
});