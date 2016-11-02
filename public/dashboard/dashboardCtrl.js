angular.module('DashboardCtrl', [])

.controller('DashboardCtrl', ['$scope', 'cluster', 'host', '$uibModal', function($scope, cluster, host, $uibModal) {
    cluster.get().then(function(clusters) {
        $scope.clusters = clusters.data;
    });
    
    host.get().then(function(hosts) {
       $scope.hosts = hosts.data; 
    });
    
    
    $scope.newClusterOpen = function() {
        var modalInstance = $uibModal.open({
           templateUrl: '../shared/clusterModal.html',
           controller: 'clusterModalCtrl',
           size: 'sm'
        });
        
        modalInstance.result.then(function(result) {
            cluster.get().then(function(clusters) {
               $scope.clusters = clusters.data;
            });
        });
    };
    
}])

;

