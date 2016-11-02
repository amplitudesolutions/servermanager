// public/js/app.js
angular.module('myApp', ['ngRoute', 'myApp.routes', 'myApp.services', 'myApp.controllers', 'DashboardCtrl', 'View1Ctrl', 'ui.bootstrap'])

.controller('menuCtrl', ['$scope', '$location', function($scope, $location) {
    
    $scope.isActive = function(item) {
        if (item == $location.path()) {
            return true;
        }
        return false;
    };
}])

;