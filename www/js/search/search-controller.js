angular.module('finalProjectiOS')

.controller('SearchCtrl', function ($scope, $log, BestBuyService, $ionicLoading) {

    $scope.data = {

        search: ''

    };

    $scope.products = [];

    $scope.search = function (term) {

        if (term) {

            BestBuyService.search(term)
                .success(function (data) {

                    $scope.products = data.products;

                    $log.info(data);

                })
                .error(function (error) {
                    $log.error('BestBuy API search error...');
                });

        } else {

            $log.error('Search term is empty...')

        }

    };
    
        $scope.$on('loader_show', function () {

        $ionicLoading.show({
            template: 'Fetching data from the web...'
        });

    });

    $scope.$on('loader_hide', function () {

        $ionicLoading.hide();

    });

//    $scope.user = user;
//    console.log($scope.user);

});