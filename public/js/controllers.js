angular.module('myApp.controllers', [])

.controller('clusterModalCtrl', ['$scope', '$uibModalInstance', 'cluster', function($scope, $uibModalInstance, cluster) {
    
    $scope.save = function() {
        cluster.add($scope.cluster).then(function(clusterData) {
            $uibModalInstance.close('success');
        })
    };
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    
    
}])

;