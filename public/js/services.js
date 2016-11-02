angular.module('myApp.services', [])

.factory('cluster', ['$http', function($http) {
    
    return {
        get: function() {
            return $http.get('/api/clusters');
        },
        add: function(cluster) {
            return $http.post('api/clusters', cluster)
                .success(function(data) {
                    return data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                    return data;
                });
        }
    }
}])

.factory('host', ['$http', function($http) {
    
    return {
        get: function() {
            return $http.get('/api/hosts');
        }
    }
    
}])

;