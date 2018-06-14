import {Cohort} from './Cohort';
import {Office} from './Office';


export class User {
   public name: string;
   public office: Office;
   public email: string;
   public cohort: Cohort;

    constructor(name: string, office: Office, email: string, cohort: Cohort) {
        this.name = name;
        this.office = office;
        this.email = email;
        this.cohort = cohort;
    }
}