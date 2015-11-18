/*global angular*/
(function () {
    'use strict';

    function Menu($state) {
        var vm = this;

        vm.goTo = function (state) {
            $state.go(state);
        };
    }

    Menu.$inject = ['$state'];

    angular.module('vhp').controller('menu', Menu);

}());