export enum Gender {
    male = "male",
    female = "female",
    other = "other",
}

export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}

export interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[]
}

export type PublicPatient = Omit<Patient, 'ssn' | 'entries' >

export type NoSSNPatient = Omit<Patient, 'ssn'>;

export type NewPatient = Omit<Patient, "id">;
