angular.module('finalProjectiOS')

.factory('LogService', function (LocalStorageService) {

    var logId = 1;

    var logs = [
        {
            'id': 'log' + logId++ + ': ',
            'message': 'empty trial log'
        }
    ];

    return {

        addLog: function (log) {

            logs.push({
                'id': 'log' + logId++ + ': ',
                'message': log
            })
            
            LocalStorageService.setStorage('logs', logs);

        },

        getLogs: function () {
            return LocalStorageService.getStorage('logs');
        },
    };
});

//    $scope.items = [
//        {
//            'title': 'Learn some stuff',
//            'done': false
//        },
//        {
//            'title': 'Code some stuff',
//            'done': false
//        },
//        {
//            'title': 'Code some more',
//            'done': false
//        }
//            ];

// ADD ITEMS TO THE LIST

//$scope.addItem = function () {
//
//        $scope.items.push({
//            'title': $scope.newItem,
//            'done': false
//        });