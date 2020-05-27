import { Patient } from './Patient'
import { Ward } from './Ward'
import { Doctor } from './Doctor';

export class Hospital {
    patients: Patient[] = [];
    wards: Ward[] = [];
    doctors: Doctor[] = [];
    registerWard(capacity: number) {
        const ward = new Ward(capacity);
        this.wards.push(ward);
    }
    registerPatient(name: string, age: number) {
        const patient = new Patient(name, age);
        this.patients.push(patient)
        this.doctors[0].patients.push(patient)
        //Надо сделать так, что бы пациент шёл не к первому доктору, а к тому доктору у которого меньше всего пациентов
    }
    registerDoctor(name: string) {
        const doctor = new Doctor(name);
        this.doctors.push(doctor)
    }

}
