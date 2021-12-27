import { NewPatient, Gender, Entry } from "./types";

const parseStr =
    (name: unknown): string => {
        if (!name || typeof name !== "string") {
            throw new Error("name is missing or not a string");
        }
        return name;
    };

const isDate =
    (date: string): boolean =>
        Boolean(Date.parse(date));

const parseDoB =
    (dateOfBirth: unknown): string => {
        if (!dateOfBirth || typeof dateOfBirth !== "string" || !isDate(dateOfBirth)) {
            throw new Error("date of birth is missing, not a string, or ill-formated");
        }
        return dateOfBirth;
    };

const isGender =
    (param: any): param is Gender =>
        Object.values(Gender).includes(param);

const parseGender =
    (gender: unknown): Gender => {
        if (!gender || !isGender(gender)) {
            throw new Error("gender is missing");
        }
        return gender;
    };

const parseEntries =
    (entries: unknown): Entry[] => {
        if (!entries || !Array.isArray(entries)) {
            throw new Error("entries is missing or not an Entry Array")
        }
        return entries
    }

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown };

const patientOfData =
    ({ name, dateOfBirth, ssn, gender, occupation }: Fields): NewPatient =>
        ({
            name: parseStr(name),
            dateOfBirth: parseDoB(dateOfBirth),
            ssn: parseStr(ssn),
            gender: parseGender(gender),
            occupation: parseStr(occupation),
            entries: [],
        });

export default patientOfData;
