import {
    Button,
    ButtonGroup,
    Radio,
    RadioGroup,
    ProgressBar,
    Frame,
} from "app/components";

import { ArrowLeft, ArrowRight, Check } from "app/icons";

import classes from "./submission.module.scss";

function Submission() {
    return (
        <div className={classes.question}>
            <p className={classes.questionDescription}>
                Select the option which best describes this behaviour of the
                patient.
            </p>
            <h1 className={classes.questionTitle}>
                Short attention span, easy distractibility, inability to
                concentrate.
            </h1>
        </div>
    );
}

const responses = [
    {
        title: `Patient Cleared`,
        description: `The patient has recovered and is cleared of PTA.`,
    },
    {
        title: `Patient Not Cleared`,
        description: `The patient is still exhibiting signs of PTA and has not recovered`,
    },
];

export default function Index() {
    return (
        <Frame title="Submission">
            {/* <ProgressBar value={100} /> */}

            <Submission />

            <RadioGroup>
                {responses.map((response) => (
                    <Radio name="response" {...response} />
                ))}
            </RadioGroup>

            <ButtonGroup>
                <Button variant="secondary" icon={ArrowLeft} text="Previous" />
                <Button variant="primary" icon={Check} text="Submit" />
            </ButtonGroup>
        </Frame>
    );
}
