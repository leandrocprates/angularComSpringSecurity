
var myController = angular.module('mainApp', ['ngSanitize']);

myController.controller("loginController", function ($scope,$http,$sce,$window )
{

    $scope.efetuarLogin = function(){
        console.log('Dentro de efetuar Login ') ; 
        
        $window.location.href = './sample1.html#/AddNewOrder';
    };
    
    init = function(){
        
    }
    
    init();
    
});