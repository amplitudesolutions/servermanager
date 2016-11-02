angular.module('myApp.routes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    
    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'dashboard/dashboard.html',
            controller: 'DashboardCtrl'
        })
        
        .when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        })
        
    ;

        // // nerds page that will use the NerdController
        // .when('/nerds', {
        //     templateUrl: 'views/nerd.html',
        //     controller: 'NerdController'
        // });

    $locationProvider.html5Mode(true);

}]);