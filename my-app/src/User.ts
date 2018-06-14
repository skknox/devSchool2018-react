import {Cohort} from './Cohort';
import {Office} from './Office';


export class User {
   public name: string;
   public office: Office;
   public email: string;
   public cohort: Cohort;
   public funFact: string;

    constructor(name: string, office: Office, email: string, funFact: string, cohort: Cohort) {
        this.name = name;
        this.office = office;
        this.email = email;
        this.funFact = funFact;
        this.cohort = cohort;
    }
}