angular.module('finalProjectiOS')

.factory('LogService', function (LocalStorageService) {
    
    var logId = 1;

    return {

        addLog: function (log) {
            LocalStorageService.setStorage('log' + logId++, log);

        },

        getLogs: function () {
            return LocalStorageService.getStorage('log1');
        },
    };
});