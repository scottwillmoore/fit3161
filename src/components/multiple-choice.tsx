import { Card } from "app/components";

import classes from "./multiple-choice.module.scss";

function Choice() {
    return (
        <label className={classes.label} htmlFor="">
            <input className={classes.input} type="radio" name="" id="" />
            <Card>
                <div className={classes.indicator}></div>
                <div className="">
                    <h1></h1>
                    <p></p>
                </div>
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
