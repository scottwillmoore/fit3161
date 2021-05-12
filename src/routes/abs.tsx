import {
    ChangeEventHandler,
    Fragment,
    useCallback,
    useEffect,
    useState,
} from "react";
import { Prompt, Redirect, useParams } from "react-router-dom";

import {
    Button,
    ButtonGroup,
    Card,
    CardSection,
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
    getAbs,
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

type NewProps = {};

function New() {
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
        const absData: Partial<AbsData> = {
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

type ViewProps = {
    absData: AbsData;
};

function View({ absData }: ViewProps) {
    return (
        <Fragment>
            <div className="">
                <p>Agression</p>
                <p>{absData.scores.aggression}</p>
                <p>Agression</p>
                <p>{absData.scores.disinhibition}</p>
                <p>Lability</p>
                <p>{absData.scores.lability}</p>
            </div>
            <Card>
                {behaviours.map((behaviour, i) => {
                    const answer = absData.answers[i];
                    const choice = choices[answer - 1].title;
                    return (
                        <CardSection key={i} className={classes.answerGroup}>
                            <p className={classes.question}>{behaviour}</p>
                            <p className={classes.answer}>{choice}</p>
                        </CardSection>
                    );
                })}
            </Card>
        </Fragment>
    );
}

export function Abs() {
    const { database } = useFirebase();
    const { patientId, testId } = useParams<any>();

    const [state, callback] = useAsyncCallback(getAbs, [patientId, testId]);

    useEffect(() => {
        callback(database, patientId, testId);
    }, []);

    switch (state.type) {
        case "idle":
        case "load":
            return <Spinner />;

        case "success":
            if (!state.value) {
                return <New />;
            }
            return <View absData={state.value} />;

        case "failure":
            throw "Failure to submit agitated behaviour scale data";

        default:
            throw "";
    }
}
