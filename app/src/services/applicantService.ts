/// <reference path="../_all.ts" />

module FtuApp {
    export interface IApplicantService {
        loadApplicantDetails(): ng.IPromise<Applicant>;
    }

    export class ApplicantService implements IApplicantService {
        static $inject = ['$q'];

        constructor(private $q: ng.IQService) {
        }

        loadApplicantDetails() : ng.IPromise<Applicant> {
            return this.$q.when(this.applicant);
        }

        private applicant: Applicant = { 
            firstName : 'Kanakarajan',
            lastName : 'Kailasham',
            cprNummer : '290978xxxx',
            vej : 'Kronhjortevej 2D',
            by : 'Højbjerg',
            postNummer : 8270,
            land : 'Denmark',
            email : 'kanakarajan.kailasham@cgi.com',
            telefon : '52147234',
            applications : [
                {
                    mainArea : 'Studentereksamen, STX',
                    category : 'Naturvidenskabelige studieretninger: Bioteknologi A - Matematik A',
                    institutionName : 'Viby Gymnasium',
                    by : 'Viby J',
                    address : 'Søndervangs Allé 45',
                    prioritet : 1,
                    status : 'Ikke-afhentet',
                    studiesStart : new Date('2016-07-01')
                },
                {
                    mainArea : 'Studentereksamen, STX',
                    category : 'Naturvidenskabelige studieretninger: Bioteknologi A - Matematik A',
                    institutionName : 'Aarhus Katedralskole',
                    by : 'Viby J',
                    address : 'Søndervangs Allé 45',
                    prioritet : 2,
                    status : 'Ikke-afhentet',
                    studiesStart : new Date('2016-07-01')
                },
                {
                    mainArea : 'Studentereksamen, STX',
                    category : 'Naturvidenskabelige studieretninger: Bioteknologi A - Matematik A',
                    institutionName : 'Viby Gymnasium',
                    by : 'Viby J',
                    address : 'Søndervangs Allé 45',
                    prioritet : 3,
                    status : 'Ikke-afhentet',
                    studiesStart : new Date('2016-07-01')
                },
                 {
                    mainArea : 'Studentereksamen, STX',
                    category : 'Naturvidenskabelige studieretninger: Bioteknologi A - Matematik A',
                    institutionName : 'Viby Gymnasium',
                    by : 'Viby J',
                    address : 'Søndervangs Allé 45',
                    prioritet : 4,
                    status : 'Ikke-afhentet',
                    studiesStart : new Date('2016-07-01')
                },
                 {
                    mainArea : 'Studentereksamen, STX',
                    category : 'Naturvidenskabelige studieretninger: Bioteknologi A - Matematik A',
                    institutionName : 'Viby Gymnasium',
                    by : 'Viby J',
                    address : 'Søndervangs Allé 45',
                    prioritet : 5,
                    status : 'Ikke-afhentet',
                    studiesStart : new Date('2016-07-01')
                }
            ]
        };
    }
}