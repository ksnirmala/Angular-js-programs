var empdetails = angular.module("myModule",[]);
empdetails.controller("Controller", function($scope){
var employee = {
firstname:"shabariraj",
lastname:"nlsr",
gender:"male"
};
$scope.employee=employee
});