(function () {
    'use strict';

    /**
     * Declare app-level module and inject dependencies
     */

    angular
        .module('compareCommodity', [
            'ui.router',
            'auth'
        ])
        .config(['$urlRouterProvider', initializeConfigurationPhase]);

    /**
     * Initialize configuration phase
     */

    function initializeConfigurationPhase($urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
    }

    /**
     * Initialize run phase
     */

    function initializeRunPhase($state, localStorageServiceWrapper, $rootScope, $anchorScroll) {

        // $stateChangeStart - fired when the transition begins
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            var token = localStorageServiceWrapper.get('jzresuaeiw'),
                toStateName = toState.name,
                fromStateName = fromState.name || 'base.dashboard',
                nonAuthStates = ['auth.login', 'auth.forgotPassword', 'auth.resetPassword'];

            if (token && nonAuthStates.indexOf(toStateName) !== -1) {
                // Go to FROM state if an authenticated user attempts to access a non-authenticated state
                event.preventDefault();
                $state.transitionTo(fromStateName);
            } else if (angular.isUndefined(token) && (nonAuthStates.indexOf(toStateName) === -1)) {
                // Go to LOGIN state if a non-authenticated user attempts to access an authenticated state
                event.preventDefault();
                $state.transitionTo('auth.login');
            }

            // 'redirectTo' will be used in state provider routes
            if (toState.redirectTo) {
                event.preventDefault();
                $state.go(toState.redirectTo, toParams);
            }

        });

        //scroll to top
        $rootScope.$on("$locationChangeSuccess", function () {
            $anchorScroll();
        });
    }

})();
