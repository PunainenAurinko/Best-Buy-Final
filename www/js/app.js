// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('finalProjectiOS', ['ionic', 'ngCordova', 'satellizer', 'ngStorage'])

.run(function ($ionicPlatform, $ionicModal, $rootScope, LocalStorageService) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {

        scope: $rootScope

    }).then(function (modal) {

        $rootScope.modal = modal;

        if (!LocalStorageService.getStorage('isAuthenticated')) {

            $rootScope.modal.show();

        } else {

            LocalStorageService.setStorage('isAuthenticated', true);

        }
    });

    $rootScope.$on('authentication-failed', function () {

        $rootScope.modal.show();

    });

    $rootScope.$on('authentication-succeeded', function () {

        $rootScope.modal.hide();
        LocalStorageService.setStorage('isAuthenticated', true)

    });

})

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.search', {
        url: '/search',
        views: {
            'tab-search': {
                templateUrl: 'templates/tab-search.html',
                controller: 'SearchCtrl',
//                resolve: {
//                    user: function ($q, $rootScope, FacebookService) {
//
//                        var deferred = $q.defer();
//
//                        FacebookService.user()
//                            .success(function (data) {
//
//                                $rootScope.userId = data.id;
//                                deferred.resolve(data);
//
//                            })
//                            .error(function (errorData) {
//
//                                deferred.reject(errorData);
//
//                            });
//
//                        return deferred.promise;
//
//                    }
//                }
            }
        }
    })

    .state('tab.stores', {
        url: '/stores',
        views: {
            'tab-stores': {
                templateUrl: 'templates/tab-stores.html',
                controller: 'StoresCtrl',
//                resolve: {
//                    user: function ($q, $rootScope, FacebookService) {
//
//                        var deferred = $q.defer();
//
//                        FacebookService.user()
//                            .success(function (data) {
//
//                                $rootScope.userId = data.id;
//                                deferred.resolve(data);
//
//                            })
//                            .error(function (errorData) {
//
//                                deferred.reject(errorData);
//
//                            });
//
//                        return deferred.promise;
//
//                    }
//                }
            }
        }
    })

    .state('tab.logs', {
            url: '/logs',
            views: {
                'tab-logs': {
                    templateUrl: 'templates/tab-logs.html',
                    controller: 'LogsCtrl',
//                    resolve: {
//                        user: function ($q, $rootScope, FacebookService) {
//
//                            var deferred = $q.defer();
//
//                            FacebookService.user()
//                                .success(function (data) {
//
//                                    $rootScope.userId = data.id;
//                                    deferred.resolve(data);
//
//                                })
//                                .error(function (errorData) {
//
//                                    deferred.reject(errorData);
//
//                                });
//
//                            return deferred.promise;
//
//                        }
//                    }
                }
            }
        })
        // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/stores');

})

.config(function ($authProvider) {

    $authProvider.facebook({
        clientId: '1081184138583246',
        scope: 'email, public_profile',
        responseType: 'token'
    });
})

.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
});