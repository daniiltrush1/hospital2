import { Patient } from './Patient';

export class Doctor {
    name: string;
    patients: Patient[];
    constructor(name: string) {
        this.name = name;
    }
    addPatient(patient: Patient) {
        this.patients.push(patient);
    }
}
