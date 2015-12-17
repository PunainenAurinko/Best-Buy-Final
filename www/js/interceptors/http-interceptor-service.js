angular.module('finalProjectiOS')

.factory('httpInterceptor', function ($q, $rootScope, $log) {

    var numLoadings = 0;

    return {

        request: function (config) {

            numLoadings++;

            // Show loader
            $rootScope.$broadcast('loader_show');

            return config || $q.when(config)

        },

        response: function (response) {

            if ((--numLoadings) === 0) {

                // Hide loader
                $rootScope.$broadcast('loader_hide');

            }
            
            return response || $q.when(response)

        },
        
        responseError: function (response) {
            
            if (!(--numLoadings)) {
                
                // Hide loader
                $rootScope.$broadcast('loader_hide');
            }
            
            $rootScope.$broadcast('authentication-failed');
            
            return $q.reject(response);
            
        }

    }

});