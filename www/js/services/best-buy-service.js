angular.module('finalProjectiOS')

.factory('BestBuyService', function ($http, $cordovaGeolocation) {

    var bestBuyAPIentryPoint = 'http://api.bestbuy.com/v1';
    var key = 'zmffkbrdkj6pa9axp4fzc7xz';

    var lat;
    var long;

    var posOptions = {
        timeout: 10000,
        enableHighAccuracy: true
    };

    $cordovaGeolocation

        .getCurrentPosition(posOptions)

    .then(function (position) {

        lat = position.coords.latitude
        long = position.coords.longitude

        console.log('lat: ', lat);
        console.log('long: ', long);

    }, function (err) {
        // error
    });

    return {

        search: function (term) {

            return $http.get(bestBuyAPIentryPoint + '/products((search=' + term + '))?show=name,sku,salePrice,longDescription,image&pageSize=15&format=json&apiKey=' + key);
        },

        findStores: function () {

            console.log('lat: ', lat);
            console.log('long: ', long);

            return $http.get(bestBuyAPIentryPoint + '/stores(area(' + lat + ',' + long + ',275))?format=json&show=storeId,name,distance&pageSize=100&apiKey=' + key);

        },

        findInNewYork: function () {

            return $http.get(bestBuyAPIentryPoint + '/stores(city=New York)?format=json&pageSize=25&apiKey=' + key);

        },

        findInCity: function (city) {

            return $http.get(bestBuyAPIentryPoint + '/stores(city=' + city + ')?format=json&pageSize=25&apiKey=' + key);

        }

    };

});