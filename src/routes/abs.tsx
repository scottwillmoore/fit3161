import { Fragment, useState } from "react";
import { Prompt } from "react-router-dom";

import { Button, ButtonGroup, Progress, Radio, RadioGroup } from "@/components";
import { ArrowLeft, ArrowRight } from "@/icons";

import classes from "./test.module.scss";

const question = `Select the response which best describes this behaviour of the patient.`;

const behaviours = [
    `Short attention span, easy distractibility, inability to concentrate.`,
    `Impulsive, impatient, low tolerance for pain or frustration.`,
    `Uncooperative, resistant to care, demanding.`,
    `Violent and or threatening violence toward people or property.`,
    `Explosive and/or unpredictable anger.`,
    `Rocking, rubbing, moaning or other self-stimulating behavior.`,
    `Pulling at tubes, restraints, etc.`,
    `Wandering from treatment areas.`,
    `Restlessness, pacing, excessive movement.`,
    `Repetitive behaviors, motor and/or verbal.`,
    `Rapid, loud or excessive talking.`,
    `Sudden changes of mood.`,
    `Easily initiated or excessive crying and/or laughter.`,
    `Self-abusiveness, physical and/or verbal.`,
];

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

function Start() {
    return <Button icon={ArrowLeft} text="Start" />;
}

function Question({ index }: { index: number }) {
    return <Fragment></Fragment>;
}

function Submission() {
    return <Button icon={ArrowLeft} text="Submit" />;
}

export enum Response {
    Absent = 0,
    Slight = 1,
    Moderate = 2,
    Extreme = 3,
}

export type State = {
    currentQuestion: number;
    responses: Response[];
};

export function Abs() {
    const [index, setIndex] = useState(0);

    return (
        <Fragment>
            <Prompt message="Are you sure you want to go back?" />

            <Progress min={0} max={1} value={index / (behaviours.length - 1)} />

            <div className={classes.questionGroup}>
                <p className={classes.question}>{question}</p>
                <h1 className={classes.behaviour}>{behaviours[index]}</h1>
            </div>

            <RadioGroup>
                {responses.map((response, key) => (
                    <Radio key={key} name="response" {...response} />
                ))}
            </RadioGroup>

            <ButtonGroup>
                <Button
                    variant="secondary"
                    icon={ArrowLeft}
                    text="Previous"
                    onClick={() => setIndex(index - 1)}
                />
                <Button
                    variant="primary"
                    icon={ArrowRight}
                    text="Next"
                    onClick={() => setIndex(index + 1)}
                />
            </ButtonGroup>
        </Fragment>
    );
}
