/*global angular*/
angular.module('vhp', ['ionic']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider.state('menu', {
        url: "/menu",
        templateUrl: "components/menu/menu.html",
        controller: 'menu as vm'
    }).state('quem', {
        url: "/quem",
        templateUrl: "components/who/who.html"
    }).state('midia', {
        url: "/midia",
        templateUrl: "components/media/media.html",
        controller: 'media as vm'
    }).state('servicos', {
        url: "/servicos",
        templateUrl: "components/services/services.html"
    }).state('contato', {
        url: "/contato",
        templateUrl: "components/contact/contact.html"
    }).state('projetos', {
        url: "/projetos",
        templateUrl: "components/projects/projects.html"
    }).state('projeto-casa-vila-nova', {
        url: "/projeto/casa-vila-nova",
        templateUrl: "components/projects/project-casa-vila-nova.html",
        controller: 'projectCasaVilaNova as vm'
    }).state('projeto-cobertura', {
        url: "/projeto/cobertura",
        templateUrl: "components/projects/project-cobertura.html",
        controller: 'projectCobertura as vm'
    }).state('projeto-alizee', {
        url: "/projeto/alizee",
        templateUrl: "components/projects/project-alizee.html"
    }).state('projeto-casa-vila', {
        url: "/projeto/casa-vila",
        templateUrl: "components/projects/project-casa-vila.html"
    }).state('projeto-casa-jardim-europa', {
        url: "/projeto/casa-jardim-europa",
        templateUrl: "components/projects/project-casa-jardim-europa.html",
        controller: 'projectCasaJardimEuropa as vm'
    });

    $urlRouterProvider.otherwise('menu');
}]).run(function () {
    'use strict';

});