import patientsData from '../data/patients';
import { Patient, PublicPatient, NewPatient } from "../types";
import { v4 as uuidv4 } from 'uuid';

const patients: Patient[] = patientsData;

const getEntries =
    (): PublicPatient[] =>
        patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
            id,
            name,
            dateOfBirth,
            gender,
            occupation,
        }));

const addEntry =
    (entry: NewPatient): Patient => {
        const newPatient = { ...entry, id: uuidv4(), entries: [] };
        patients.push(newPatient);
        return newPatient;
    };

const findById =
    (id: string): Patient | undefined =>
        patients.find(p => p.id === id);

export default {
  getEntries,
  addEntry,
  findById,
};
