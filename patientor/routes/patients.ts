import express from 'express';
import patientsService from '../services/patientsService';
import patientOfData from "../utils";
const router = express.Router();

router.get("/", (_req, res) => {
    res.send(patientsService.getEntries());
});

router.post("/", (req, res) => {
    try {
        const newPatient = patientOfData(req.body);
        const added = patientsService.addEntry(newPatient);
        res.json(added);
    } catch (err: any) {
        res.status(400).send(err.message);
    }
});

router.get("/:id", (req, res) => {
    const patient = patientsService.findById(req.params.id);
    if (patient) {
        res.send(patient);
    } else {
        res.sendStatus(404);
    }
});

export default router;
