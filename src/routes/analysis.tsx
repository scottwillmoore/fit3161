import { Linechart } from "@/components";

import classes from "./test.module.scss";

const wptas_data = [
    [0, 0, 1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0],
];

const abs_data = [
    [2, 2, 3, 1, 3, 2, 1, 3, 1, 3, 2, 2, 2, 4],
    [1, 3, 2, 2, 1, 3, 4, 1, 2, 3, 3, 1, 4, 3],
    [1, 1, 3, 4, 2, 2, 3, 4, 4, 2, 3, 3, 2, 1],
    [3, 4, 4, 4, 1, 4, 3, 1, 4, 3, 1, 2, 3, 3],
    [3, 1, 1, 4, 2, 3, 4, 4, 1, 1, 1, 3, 1, 3],
    [1, 4, 4, 4, 4, 4, 3, 3, 3, 1, 4, 1, 4, 3],
    [4, 3, 2, 4, 2, 2, 2, 3, 4, 2, 4, 1, 4, 4],
    [4, 2, 1, 4, 1, 2, 2, 1, 3, 4, 4, 2, 3, 1],
    [2, 1, 4, 4, 2, 2, 3, 1, 3, 2, 3, 4, 4, 4],
];

export function Analysis() {
    return (
        <div>
            <h1 className={classes.subtitle}>
                Westmead Post-Traumatic Amnesia Scale
            </h1>
            <Linechart data={wptas_data} test="wptas"></Linechart>
            <br />
            <h1 className={classes.subtitle}>Agitated Behaviour Scale</h1>
            <Linechart data={abs_data} test="abs"></Linechart>
        </div>
    );
}
