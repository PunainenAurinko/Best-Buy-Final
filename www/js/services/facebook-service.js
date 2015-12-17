//angular.module('finalProjectiOS')
//
//.factory('FacebookService', function ($auth, $http, $ionicPopup) {
//
//    var facebookApiURL = 'https://graph.facebook.com/v2.2'
//
//    return {
//
//        user: function () {
//
//            if ($auth.isAuthenticated()) {
//
//                return $http.get(facebookApiURL, {
//
//                    params: {
//
//                        access_token: $auth.getToken(),
//                        fields: 'name, picture, cover, gender, id, link, age_range, timezone',
//                        format: 'json'
//
//                    }
//
//                });
//
//            } else {
//
//                $ionicPopup.alert({
//
//                    title: 'Error',
//                    content: 'User not authorized'
//
//                });
//
//            }
//
//        }
//    };
//
//})
