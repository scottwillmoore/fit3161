import {
    Button,
    ButtonGroup,
    Radio,
    RadioGroup,
    ProgressBar,
    Frame,
} from "app/components";

import { ArrowLeft, ArrowRight } from "app/icons";

import classes from "./question.module.scss";

function Question() {
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
        title: `Absent`,
        description: `The behaviour is not present.`,
    },
    {
        title: `Slight`,
        description: `The behavior is present, but does not prevent the conduct of other, contextually appropriate behavior.  The individual may redirect spontaneously, or the continuation of the agitated behavior does not disrupt appropriate behavior.`,
    },
    {
        title: `Moderate`,
        description: `The individual needs to be redirected from an agitated to an appropriate behavior, but benefits from such cues.`,
    },
    {
        title: `Extreme`,
        description: `The individual is not able to engage in appropriate behavior due to the interference of their agitated behavior, even when external cues or redirection is provided.`,
    },
];

export default function Index() {
    return (
        <Frame title="Question">
            {/* <ProgressBar value={90} /> */}

            <Question />

            <RadioGroup>
                {responses.map((response) => (
                    <Radio name="response" {...response} />
                ))}
            </RadioGroup>

            <ButtonGroup>
                <Button variant="secondary" icon={ArrowLeft} text="Previous" />
                <Button variant="primary" icon={ArrowRight} text="Next" />
            </ButtonGroup>
        </Frame>
    );
}
