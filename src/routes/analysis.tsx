import { useParams } from "react-router-dom";

import { Spinner, Linechart } from "@/components";
import { useAsyncCallback, useFirebase } from "@/utilities";

import classes from "./abs.module.scss";
import { getAllAbs } from "@/models";
import { useEffect } from "react";

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
    const { database } = useFirebase();
    const { patientId } = useParams<any>();

    const [state, callback] = useAsyncCallback(getAllAbs, [patientId]);

    useEffect(() => {
        callback(database, patientId);
    }, [patientId]);

    switch (state.type) {
        case "idle":
        case "load":
            return <Spinner />;

        case "success":
            // See below.
            break;

        case "failure":
            throw "Failure to get analysis";

        default:
            throw "";
    }

    const allAbsData = state.value;

    return (
        <div>
            {allAbsData.map((absData, i) => (
                <p>{absData.id}</p>
            ))}

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
