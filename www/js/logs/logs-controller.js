angular.module('finalProjectiOS')

.controller('LogsCtrl', function ($scope, LogService) {

    //    $scope.user = user;
    //    console.log($scope.user);
    
//    localStorage.clear();

    $scope.logs = [];
    
    $scope.logs = LogService.getLogs();

    $scope.add = function (log) {
        
         $scope.logs = LogService.addLog($scope.logs, log);
        
    };

});