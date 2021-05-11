import { ChangeEventHandler, Fragment, useCallback, useState } from "react";
import { Prompt, Redirect, useParams } from "react-router-dom";

import {
    Button,
    ButtonGroup,
    Progress,
    Radio,
    RadioGroup,
    Spinner,
} from "@/components";
import { ArrowLeft, ArrowRight, Check } from "@/icons";
import {
    AbsAnswer,
    AbsData,
    behaviours,
    calculateScores,
    choices,
    newAbs,
    question,
} from "@/models";
import { useAsyncCallback, useFirebase } from "@/utilities";

import classes from "./abs.module.scss";

type SubmitProps = {
    onBack: () => void;
    onSubmit: () => void;
};

function Submit({ onBack, onSubmit }: SubmitProps) {
    return (
        <Fragment>
            <ButtonGroup>
                <Button icon={ArrowLeft} text="Back" onClick={onBack} />
                <Button
                    variant="primary"
                    icon={Check}
                    text="Submit"
                    onClick={onSubmit}
                />
            </ButtonGroup>
        </Fragment>
    );
}

export function Abs() {
    const { database } = useFirebase();
    const { patientId, testId } = useParams<any>();

    const [answers, setAnswers] = useState<AbsAnswer[]>([]);

    const [currentAnswer, setCurrentAnswer] = useState<AbsAnswer | undefined>();
    const currentIndex = answers.length + 1;

    const isStart = answers.length <= 0;
    const isEnd = answers.length >= behaviours.length;

    const isPreviousDisabled = isStart;
    const isNextDisabled = isEnd || !currentAnswer;

    const [state, callback] = useAsyncCallback(newAbs, [patientId, testId]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setCurrentAnswer(parseInt(event.target.value) as AbsAnswer);
    };

    const handlePrevious = () => {
        const newAnswers = [...answers];
        const previousAnswer = newAnswers.pop();
        setCurrentAnswer(previousAnswer);
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (!currentAnswer) {
            return;
        }
        setCurrentAnswer(undefined);
        setAnswers([...answers, currentAnswer]);
    };

    const handleSubmit = () => {
        const absData: AbsData = {
            answers,
            scores: calculateScores(answers),
        };
        callback(database, patientId, testId, absData);
    };

    switch (state.type) {
        case "idle":
            // See below.
            break;

        case "load":
            return <Spinner />;

        case "success":
            return <Redirect to={`/patient/${patientId}`} />;

        case "failure":
            throw "Failure to submit agitated behaviour scale data";

        default:
            throw "";
    }

    return (
        <Fragment>
            <Prompt message="Are you sure you want to go back?" />
            <Progress current={currentIndex} total={behaviours.length} />
            {isEnd ? (
                <Submit onBack={handlePrevious} onSubmit={handleSubmit} />
            ) : (
                <Fragment>
                    <div className={classes.questionGroup}>
                        <p className={classes.question}>{question}</p>
                        <h1 className={classes.behaviour}>
                            {behaviours[answers.length]}
                        </h1>
                    </div>

                    <RadioGroup>
                        {choices.map(({ value, ...response }, key) => {
                            const isChecked = currentAnswer == value;
                            return (
                                <Radio
                                    key={key}
                                    name="response"
                                    value={value}
                                    checked={isChecked}
                                    onChange={handleChange}
                                    {...response}
                                />
                            );
                        })}
                    </RadioGroup>

                    <ButtonGroup>
                        <Button
                            variant="secondary"
                            icon={ArrowLeft}
                            text="Previous"
                            disabled={isPreviousDisabled}
                            onClick={handlePrevious}
                        />
                        <Button
                            variant="primary"
                            icon={ArrowRight}
                            text="Next"
                            disabled={isNextDisabled}
                            onClick={handleNext}
                        />
                    </ButtonGroup>
                </Fragment>
            )}
        </Fragment>
    );
}
