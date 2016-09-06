/// <reference path="../_all.ts" />
var FtuApp;
(function (FtuApp) {
    var ApplicantService = (function () {
        function ApplicantService($q) {
            this.$q = $q;
            this.applicant = {
                firstName: 'Kanakarajan',
                lastName: 'Kailasham',
                cprNummer: '290978xxxx',
                vej: 'Kronhjortevej 2D',
                by: 'Højbjerg',
                postNummer: 8270,
                land: 'Denmark',
                email: 'kanakarajan.kailasham@cgi.com',
                telefon: '52147234',
                applications: [
                    {
                        applicationId: 100,
                        mainArea: 'Studentereksamen, STX',
                        category: 'Naturvidenskabelige studieretninger: Bioteknologi A - Matematik A',
                        institutionName: 'Viby Gymnasium',
                        by: 'Viby J',
                        address: 'Søndervangs Allé 45',
                        prioritet: 1,
                        status: 'Ikke-afhentet',
                        studiesStart: new Date('2016-07-01'),
                        signingDate: new Date('2016-06-01')
                    },
                    {
                        applicationId: 101,
                        mainArea: 'Studentereksamen, STX',
                        category: 'Naturvidenskabelige studieretninger: Bioteknologi A - Matematik A',
                        institutionName: 'Aarhus Katedralskole',
                        by: 'Viby J',
                        address: 'Søndervangs Allé 45',
                        prioritet: 2,
                        status: 'Ikke-afhentet',
                        studiesStart: new Date('2016-07-01')
                    },
                    {
                        applicationId: 102,
                        mainArea: 'Studentereksamen, STX',
                        category: 'Naturvidenskabelige studieretninger: Bioteknologi A - Matematik A',
                        institutionName: 'Viby Gymnasium',
                        by: 'Viby J',
                        address: 'Søndervangs Allé 45',
                        prioritet: 3,
                        status: 'Ikke-afhentet',
                        studiesStart: new Date('2016-07-01')
                    },
                    {
                        applicationId: 103,
                        mainArea: 'Studentereksamen, STX',
                        category: 'Naturvidenskabelige studieretninger: Bioteknologi A - Matematik A',
                        institutionName: 'Viby Gymnasium',
                        by: 'Viby J',
                        address: 'Søndervangs Allé 45',
                        prioritet: 4,
                        status: 'Ikke-afhentet',
                        studiesStart: new Date('2016-07-01')
                    },
                    {
                        applicationId: 104,
                        mainArea: 'Studentereksamen, STX',
                        category: 'Naturvidenskabelige studieretninger: Bioteknologi A - Matematik A',
                        institutionName: 'Viby Gymnasium',
                        by: 'Viby J',
                        address: 'Søndervangs Allé 45',
                        prioritet: 5,
                        status: 'Ikke-afhentet',
                        studiesStart: new Date('2016-07-01')
                    }
                ]
            };
        }
        ApplicantService.prototype.loadApplicantDetails = function () {
            return this.$q.when(this.applicant);
        };
        ApplicantService.$inject = ['$q'];
        return ApplicantService;
    }());
    FtuApp.ApplicantService = ApplicantService;
})(FtuApp || (FtuApp = {}));
//# sourceMappingURL=applicantService.js.map