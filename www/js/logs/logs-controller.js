angular.module('finalProjectiOS')

.controller('LogsCtrl', function ($scope, LogService) {

    //    $scope.user = user;
    //    console.log($scope.user);

    $scope.logs = LogService.getLogs();

    $scope.add = function (log) {
        LogService.addLog(log);
    };

});