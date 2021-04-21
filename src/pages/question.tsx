import { ProgressBar, Frame, MultipleChoice } from "app/components";

import classes from "./question.module.scss";

function Question() {
    return (
        <div className={classes.question}>
            <h1 className={classes.questionTitle}>
                “Short attention span, easy distractibility, inability to
                concentrate.”
            </h1>
            <p className={classes.questionDescription}>
                Select the option which best describes this behaviour of the
                patient.
            </p>
        </div>
    );
}

export default function Index() {
    return (
        <Frame title="Index">
            <ProgressBar value={50} />
            <Question />
            <MultipleChoice />
        </Frame>
    );
}
