(function () {
    'use strict';

    angular
        .module('login.service', [])
        .factory('loginService', [loginService]);

    function loginService() {

        return {
            authenticate: authenticate
        };

        /**
         * Authenticate user and fetch all common data required across the application
         */

        function authenticate() {

            return {
                Status: {
                    Messages: ["User authenticated successfully."]
                },
                Data: {
                    Auth: {
                        Token: 'ATaEgwCxyrdfPAAaoVOzzNMDKku9PSxu30sUaFOtwq1k1LhnOMvqmzIp3Q1cCTYQsIi74HNdBFbLebX4',
                        UserFullName: 'Jeremy Lawrence',
                        UserEmail: 'jeremylawrence@commondityCompare.com'
                    }
                }
            };
        }
    }
})();
