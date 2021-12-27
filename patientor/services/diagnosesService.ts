import diagnosesData from '../data/diagnoses';
import { Diagnosis } from "../types";

const getEntries =
    (): Diagnosis[] =>
        diagnosesData;

export default {
  getEntries,
};
