angular.module('finalProjectiOS')

.factory('GeolocationService', function ($cordovaGeolocation) {

    return {

        findMyLocation: function () {


            var posOptions = {
                timeout: 10000,
                enableHighAccuracy: false
            };

            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    var lat = position.coords.latitude
                    var long = position.coords.longitude
                }, function (err) {
                    // error
                });
        }
    }
});