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
        MainController.prototype.removeApplication = function ($event, id) {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete the application?')
                .textContent('The Application ' + id + ' will be deleted, you can\'t undo this action.')
                .targetEvent($event)
                .ok('Yes')
                .cancel('No');
            var self = this;
            this.$mdDialog.show(confirm).then(function () {
                self.openToast('Deleted Application');
            });
        };
        MainController.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000));
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