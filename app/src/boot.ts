/// <reference path="_all.ts" />
module FtuApp {
    angular.module('ftuApp', ['ngMaterial', 'ngMdIcons', 'ngMessages', 'ui.router'])
        .service('applicantService', ApplicantService)
        .controller('mainController', MainController)
        .config(($mdIconProvider: angular.material.IIconProvider,
            $mdThemingProvider: angular.material.IThemingProvider,
            $stateProvider: ng.ui.IStateProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider,
            $locationProvider: ng.ILocationProvider
        ) => {
            $mdIconProvider
                .icon("home", './assets/svg/ic_home_white_24px.svg', 24)
                .icon('menu', './assets/svg/menu.svg', 24)
                .icon('course', './assets/svg/ic_subject_white_24px.svg', 24)
                .icon('upload', './assets/svg/ic_file_upload_white_24px.svg', 24)
                .icon('delete', './assets/svg/ic_delete_white_24px.svg', 24)
                .icon('print', './assets/svg/ic_print_white_24px.svg', 24)
                .icon('increase', './assets/svg/ic_arrow_drop_up_white_24px.svg', 12)
                .icon('decrease', './assets/svg/ic_arrow_drop_down_white_24px.svg', 12);


            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');


            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: './dist/views/main-content.html'
                })
                .state('courses', {
                    url: '/courses',
                    templateUrl: './dist/views/courses.html'
                });
            $urlRouterProvider.otherwise('/home');
        });
}

