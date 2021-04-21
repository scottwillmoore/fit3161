import { Card } from "app/components";

import classes from "./multiple-choice.module.scss";

function Choice() {
    return (
        <label className={classes.label} htmlFor="">
            <input className={classes.input} type="radio" name="" id="" />
            <Card>
                <Card.Section>
                    <div className={classes.indicator}></div>
                    <div>
                        <h1>Slight</h1>
                        <p>
                            The behavior is present, but does not prevent the
                            conduct of other, contextually appropriate behavior.
                            The individual may redirect spontaneously, or the
                            continuation of the agitated behavior does not
                            disrupt appropriate behavior.
                        </p>
                    </div>
                </Card.Section>
            </Card>
        </label>
    );
}

export function MultipleChoice() {
    return (
        <div>
            <Choice />
        </div>
    );
}
