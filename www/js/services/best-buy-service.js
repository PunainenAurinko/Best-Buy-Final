angular.module('finalProjectiOS')

.factory('BestBuyService', function ($http, GeolocationService) {

    var bestBuyAPIentryPoint = 'http://api.bestbuy.com/v1';
    var key = 'zmffkbrdkj6pa9axp4fzc7xz';

    return {

        search: function (term) {

            return $http.get(bestBuyAPIentryPoint + '/products((search=' + term + '))?show=name,sku,salePrice,longDescription,image&pageSize=15&format=json&apiKey=' + key);
        },

        findStores: function () {

            return $http.get(bestBuyAPIentryPoint + '/stores(area(45.4214,-75.6919,275))?format=json&show=storeId,name,distance&pageSize=100&apiKey=' + key);

//            return $http.get(bestBuyAPIentryPoint + '/stores(area(' + GeolocationService.findMyLocation.lat + ',-' + GeolocationService.findMyLocation.long + ',275))?format=json&show=storeId,name,distance&pageSize=100&apiKey=' + key);

        },

        findInNewYork: function () {

            return $http.get(bestBuyAPIentryPoint + '/stores(city=New York)?format=json&pageSize=25&apiKey=' + key);

        },

        findInCity: function (city) {

            return $http.get(bestBuyAPIentryPoint + '/stores(city=' + city + ')?format=json&pageSize=25&apiKey=' + key);

        }

    };

});