angular.module('finalProjectiOS')

.factory('LogService', function(LocalStorageService) {
    var logId = 1;
    return {
        add: function(log) {
            LocalStorageService.setStorage(logId++, log);
        }
    };
});