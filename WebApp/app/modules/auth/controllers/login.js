(function () {
    'use strict';

    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state', 'loginService', loginController]);

    function loginController($scope, $state, loginService) {
        $scope.loginDetails = loginService.authenticate();
    }
})();
