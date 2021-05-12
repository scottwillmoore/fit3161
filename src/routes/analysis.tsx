import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { Fragment } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Spinner, Linechart, Card, CardSection } from "@/components";
import { useAsyncCallback, useFirebase } from "@/utilities";

import classes from "./analysis.module.scss";
import { getAllAbs } from "@/models";
import { useEffect } from "react";

const dateFormat = "do MMMM yyyy";

function formatTimestamp(timestamp: Timestamp) {
    return format(timestamp.toDate(), dateFormat);
}

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
    const history = useHistory();

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
        <Fragment>
            <h1 className={classes.title}>Agitated Behaviour Scale</h1>

            <Linechart data={abs_data} test="abs"></Linechart>

            {allAbsData
                .filter((absData) => absData.takenOn != undefined)
                .map((absData, i) => (
                    <Card
                        key={i}
                        onClick={() =>
                            history.push(
                                `/patient/${patientId}/abs/${absData.id}`
                            )
                        }
                        className={classes.action}
                    >
                        <CardSection>
                            <p className={classes.property}>Identifier</p>
                            <p className={classes.value}>{absData.id}</p>
                            {absData.takenOn && (
                                <Fragment>
                                    <p className={classes.property}>Date</p>
                                    <p className={classes.value}>
                                        {formatTimestamp(absData.takenOn)}
                                    </p>
                                </Fragment>
                            )}
                        </CardSection>
                    </Card>
                ))}

            <h1 className={classes.subtitle}>
                Westmead Post-Traumatic Amnesia Scale
            </h1>
            <Linechart data={wptas_data} test="wptas"></Linechart>
        </Fragment>
    );
}
