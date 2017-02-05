(function () {
    'use strict';

    angular
        .module('auth')
        .config(['$stateProvider', stateProvider]);

    function stateProvider($stateProvider) {

        $stateProvider
            .state('auth', {
                url: '',
                abstract: true,
                views: {
                    '@': {
                        templateUrl: 'app/modules/auth/views/auth.html',
                    },
                    'header@auth': {
                        templateUrl: 'app/modules/auth/views/header.html',
                    }
                }
            })
            .state('auth.login', {
                url: '/login',
                views: {
                    'content': {
                        templateUrl: 'app/modules/auth/views/login.html',
                        controller: 'loginController'
                    }
                }
            })
            .state('auth.forgotPassword', {
                url: '/forgot-password',
                views: {
                    'content': {
                        templateUrl: 'app/modules/auth/views/forgot-password.html',
                        controller: 'forgotPasswordController'
                    }
                }

            })
            .state('auth.resetPassword', {
                url: '/reset-password',
                views: {
                    'content': {
                        templateUrl: 'app/modules/auth/views/reset-password.html',
                        controller: 'resetPasswordController'
                    }
                }
            })
             .state('logout', {
                 url: '/logout',
                 controller: 'logoutController'
             });
    }
})();
