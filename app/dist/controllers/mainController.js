/// <reference path="../_all.ts" />
var FtuApp;
(function (FtuApp) {
    var MainController = (function () {
        function MainController(applicantService, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            this.applicantService = applicantService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            this.message = "Hello from controller";
            this.applicant = null;
            var self = this;
            this.applicantService.loadApplicantDetails().then(function (applicant) {
                self.applicant = applicant;
                console.log(self.applicant);
            });
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.$inject = [
            'applicantService',
            '$mdSidenav',
            '$mdToast',
            '$mdDialog',
            '$mdMedia',
            '$mdBottomSheet'];
        return MainController;
    }());
    FtuApp.MainController = MainController;
})(FtuApp || (FtuApp = {}));
//# sourceMappingURL=mainController.js.map