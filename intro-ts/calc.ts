const calculateBmi =
    (h: number, m: number): string =>
        ((result: number): string => {
            switch (true) {
                case result < 18.4: {
                    return `Underweight (${result})`;
                }
                case result < 24.9: {
                    return `Normal (${result})`;
                }
                case result < 29.9: {
                    return `Overweight (${result})`;
                }
                default: {
                    return `Obese (${result})`;
                }
            }
        })(m / ((h / 100) ** 2));

//console.log(calculateBmi(180, 74))

interface Summary {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const summaryOfExercise =
    (exercise: number[], target: number): Summary =>
        ((avg: number): Summary =>
            ((rating: number): Summary =>
                ({
                    periodLength: exercise.length,
                    trainingDays: exercise.filter((d: number) => d !== 0).length,
                    average: avg,
                    target: target,
                    success: avg >= target,
                    rating: rating,
                    ratingDescription: rating === 3 ? "Noice!" : rating == 2 ? "Snot bad!" : "Get to work!",
                })
            )(avg >= target ? 3 : (avg + 0.5) >= target ? 2 : 1)
        )(exercise.reduce((a: number, d: number) => a + d, 0) / exercise.length);

//console.log(summaryOfExercise([3, 0, 2, 4.5, 0, 3, 1], 2));

const toExport = {
    calculateBmi,
    summaryOfExercise,
}

Object.assign(module.exports, toExport)

/*
try {
    console.log(calc(1, 5, "divide"));
} catch (error: unknown) {
    let msg;
    if (error instanceof Error) {
        msg = `Error: ${error.message}`;
    }
    console.log(msg);
}
*/
