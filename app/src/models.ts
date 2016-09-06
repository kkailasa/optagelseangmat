/// <reference path="_all.ts" />

module FtuApp {
    export class Applicant {
        constructor(
            public firstName: string,
            public lastName: string,
            public cprNummer: string,
            public vej: string,
            public by: string,
            public postNummer : number,
            public land: string,
            public email: string,
            public telefon: string,
            public applications : Application[]
            ) {

        }
    }


    export class Application {
        constructor(
            public mainArea : string,
            public institutionName : string,
            public category : string,
            public by : string,
            public address : string,
            public prioritet : number,
            public status : string,
            public studiesStart : Date
        ){
            
        }
    }
}