/*global angular, $*/
(function () {
    'use strict';

    function Menu($timeout) {
        var vm = this;
        
        $timeout(function () {
            $(".bg").interactive_bg({
                strength: 25,
                scale: 1.05,
                animationSpeed: "100ms",
                contain: true,
                wrapContent: false
            });
            
            $(".bg > .ibg-bg").css({
                width: $(window).outerWidth(),
                height: $(window).outerHeight() / 2
            });
        });

        $(window).resize(function () {
            $(".bg > .ibg-bg").css({
                width: $(window).outerWidth(),
                height: $(window).outerHeight() / 2
            });
        });
    }

    Menu.$inject = ['$timeout'];

    angular.module('vhp').controller('menu', Menu);

}());