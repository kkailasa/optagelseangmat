/// <reference path="_all.ts" />
var FtuApp;
(function (FtuApp) {
    var Applicant = (function () {
        function Applicant(firstName, lastName, cprNummer, vej, by, postNummer, land, email, telefon, applications) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.cprNummer = cprNummer;
            this.vej = vej;
            this.by = by;
            this.postNummer = postNummer;
            this.land = land;
            this.email = email;
            this.telefon = telefon;
            this.applications = applications;
        }
        return Applicant;
    }());
    FtuApp.Applicant = Applicant;
    var Application = (function () {
        function Application(applicationId, mainArea, institutionName, category, by, address, prioritet, status, studiesStart, signingDate) {
            this.applicationId = applicationId;
            this.mainArea = mainArea;
            this.institutionName = institutionName;
            this.category = category;
            this.by = by;
            this.address = address;
            this.prioritet = prioritet;
            this.status = status;
            this.studiesStart = studiesStart;
            this.signingDate = signingDate;
        }
        return Application;
    }());
    FtuApp.Application = Application;
})(FtuApp || (FtuApp = {}));
//# sourceMappingURL=models.js.map