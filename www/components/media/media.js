/*global angular, $*/
(function () {
    'use strict';

    function Media() {
        var vm = this;

        vm.images = 8;
        vm.currentIndex = 0;
        
        vm.moveNext = function () {
            vm.currentIndex += 1;
            
            if (vm.currentIndex > vm.images) {
                vm.currentIndex = 0;
            }
        };
        
        vm.movePrevious = function () {
            vm.currentIndex -= 1;
            
            if (vm.currentIndex < 0) {
                vm.currentIndex = vm.images - 1;
            }
        };

    }

    Media.$inject = [];

    angular.module('vhp').controller('media', Media);

}());