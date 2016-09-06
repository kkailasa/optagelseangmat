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
    }
}