angular.module('finalProjectiOS')

.controller('StoresCtrl', function ($scope, BestBuyService, $log, $ionicPopup) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    //    $scope.user = user;
    //    console.log($scope.user);

    $scope.data = {

        findInCity: ''

    };


    $scope.stores = [];

    $scope.findStores = function () {

        BestBuyService.findStores()
            .success(function (data) {

                $scope.stores = data.stores;

                $log.info(data);

            })
            .error(function (error) {
                $log.error('BestBuy API search error...');
            });
    }

    $scope.findInNewYork = function () {

        BestBuyService.findInNewYork()
            .success(function (data) {

                $scope.stores = data.stores;

                $log.info(data);

            })
            .error(function (error) {
                $log.error('BestBuy API search error...');
            });
    }

    //    $scope.findInCity = function () {
    //
    //        BestBuyService.findInCity()
    //            .success(function (data) {
    //
    //                $scope.stores = data.stores;
    //
    //                $log.info(data);
    //
    //            })
    //            .error(function (error) {
    //                $log.error('BestBuy API search error...');
    //            });
    //    }

    $scope.findInCity = function (city) {

        if (city) {

            BestBuyService.findInCity(city)
                .success(function (data) {

                    $scope.stores = data.stores;

                    $log.info(data);

                })
                .error(function (error) {
                    $log.error('BestBuy API search error...');
                });

        } else {

            $log.error('Search term is empty...')

            $ionicPopup.alert({
                title: 'City name missing',
                content: 'Please enter a search term in the "Enter City" field'
            });

        }

    };

});