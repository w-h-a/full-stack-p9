const express = require("express");
const calc = require("./calc");

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Hello, FS!");
});

app.post("/bmi", (req, res) => {
    try {
        if (!req.body.height || !req.body.weight) {
            throw new Error("missing argument");
        }
        if (typeof req.body.height !== "number" || typeof req.body.weight !== "number") {
            throw new Error("height is not a number (centimeterss) or weight is not a number (kilograms)");
        }
        req.body.bmi = calc.calculateBmi(req.body.height, req.body.weight);
        res.send(req.body)
    } catch (error: unknown) {
        let msg;
        if (error instanceof Error) {
            msg = `Error: ${error.message}`;
        }
        console.log(msg);
    }
})

app.post("/exercise", (req, res) => {
    try {
        if (!req.body.daily_exercises || !req.body.target) {
            throw new Error("missing argument");
        }
        if (!Array.isArray(req.body.daily_exercises) || req.body.daily_exercises.length === 0 || !req.body.daily_exercises.every((v: any): boolean => typeof v === "number") || typeof req.body.target !== "number") {
            throw new Error("daily_exercises is not an array with only numbers and nonzero length or target is not a number");
        }
        const result = calc.summaryOfExercise(req.body.daily_exercises, req.body.target);
        res.send(result);
    } catch (error: unknown) {
        let msg;
        if (error instanceof Error) {
            msg = `Error: ${error.message}`;
        }
        console.log(msg);
    }
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`);
});
