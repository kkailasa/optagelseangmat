/// <reference path="../_all.ts" />
module FtuApp {
    export class MainController {
        static $inject = [
            'applicantService',
            '$mdSidenav',
            '$mdToast',
            '$mdDialog',
            '$mdMedia',
            '$mdBottomSheet'];

        constructor(private applicantService: IApplicantService,
            private $mdSidenav: angular.material.ISidenavService,
            private $mdToast: angular.material.IToastService,
            private $mdDialog: angular.material.IDialogService,
            private $mdMedia: angular.material.IMedia,
            private $mdBottomSheet: angular.material.IBottomSheetService) {
            var self = this;
            this.applicantService.loadApplicantDetails().then((applicant: Applicant) => {
                self.applicant = applicant;
                console.log(self.applicant);
            });
        }
        message: string = "Hello from controller";
        applicant: Applicant = null;

        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }

        removeApplication($event, id : number ) {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete the application?')
                .textContent('The Application '+ id +' will be deleted, you can\'t undo this action.')
                .targetEvent($event)
                .ok('Yes')
                .cancel('No');

            var self = this;
            this.$mdDialog.show(confirm).then(() => {
                self.openToast('Deleted Application');
            })
        }

        openToast(message: string): void {
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .position('top right')
                    .hideDelay(3000)
            );
        }
    }
}