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
    AbsChoice,
    AbsData,
    behaviours,
    choices,
    newAbs,
    question,
} from "@/models";
import { useAsync, useFirebase } from "@/utilities";

import classes from "./abs.module.scss";

export function Abs() {
    const { database } = useFirebase();
    const { patientId, testId } = useParams<any>();

    const [answers, setAnswers] = useState<AbsChoice[]>([]);

    const [currentAnswer, setCurrentAnswer] = useState<AbsChoice | undefined>();
    const currentIndex = answers.length + 1;

    const isStart = answers.length <= 0;
    const isEnd = answers.length >= behaviours.length;

    const isPreviousDisabled = isStart;
    const isNextDisabled = isEnd || !currentAnswer;

    const absData: AbsData = {
        answers,
    };

    const submitCallback = useCallback(
        () => newAbs(database, patientId, testId, absData),
        [database, patientId, testId, absData]
    );

    const [submit, setSubmit] = useState(false);
    const submitResult = useAsync(submitCallback, submit);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setCurrentAnswer(parseInt(event.target.value) as AbsChoice);
    };

    const handlePrevious = () => {
        const newAnswers = [...answers];
        const previousChoice = newAnswers.pop();

        setCurrentAnswer(previousChoice);
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
        setSubmit(true);
    };

    switch (submitResult.state) {
        case "idle":
            break;

        case "load":
            return <Spinner />;

        case "success":
            return <Redirect to={`/patient/${patientId}`} />;

        case "error":
        default:
            throw "Failure to submit agitated behaviour scale data";
    }

    let fragment = null;

    if (isEnd) {
        fragment = (
            <Fragment>
                <Prompt message="Are you sure you want to go back?" />

                <ButtonGroup>
                    <Button
                        icon={ArrowLeft}
                        text="Back"
                        onClick={handlePrevious}
                    />
                    <Button
                        variant="primary"
                        icon={Check}
                        text="Submit"
                        onClick={handleSubmit}
                    />
                </ButtonGroup>
            </Fragment>
        );
    } else {
        fragment = (
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
        );
    }

    return (
        <Fragment>
            <Prompt message="Are you sure you want to go back?" />

            <Progress current={currentIndex} total={behaviours.length} />

            {fragment}
        </Fragment>
    );
}
