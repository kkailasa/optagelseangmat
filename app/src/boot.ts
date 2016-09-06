/// <reference path="_all.ts" />
module FtuApp {
    angular.module('ftuApp', ['ngMaterial','ngMdIcons','ngMessages'])
        .service('applicantService', ApplicantService)
        .controller('mainController', MainController)
        .config(($mdIconProvider: angular.material.IIconProvider,
            $mdThemingProvider: angular.material.IThemingProvider) => {
            $mdIconProvider
                .icon("home", './assets/svg/ic_home_white_24px.svg', 24)
                .icon('menu', './assets/svg/menu.svg', 24)
                .icon('course','./assets/svg/ic_subject_white_24px.svg',24)
                .icon('upload','./assets/svg/ic_file_upload_white_24px.svg',24)
                .icon('delete','./assets/svg/ic_delete_white_24px.svg',24)
                .icon('print','./assets/svg/ic_print_white_24px.svg',24)
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');
        });
}

