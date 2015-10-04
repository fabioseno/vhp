/*global angular*/
(function () {
    'use strict';

    function ProjectCasaVilaNova() {
        var vm = this;

        vm.images = 4;
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

    ProjectCasaVilaNova.$inject = [];

    angular.module('vhp').controller('projectCasaVilaNova', ProjectCasaVilaNova);

}());