/*global angular*/
(function () {
    'use strict';

    function ProjectCasaJardimEuropa() {
        var vm = this;

        vm.images = 5;
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

    ProjectCasaJardimEuropa.$inject = [];

    angular.module('vhp').controller('projectCasaJardimEuropa', ProjectCasaJardimEuropa);

}());