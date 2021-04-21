import { useState } from "react";

import { WithChildren } from "app/utilities";

import classes from "./radio.module.scss";

export type RadioProperties = {
    name: string;
    title: string;
    description: string;
};

export function Radio({ name, title, description }: RadioProperties) {
    return (
        <label className={classes.label}>
            <input className={classes.input} type="radio" name={name} />
            <div className={classes.item}>
                <div className={classes.indicator}></div>
                <div className={classes.column}>
                    <span className={classes.title}>{title}</span>
                    <span className={classes.description}>{description}</span>
                </div>
            </div>
        </label>
    );
}

export type RadioGroupProperties = WithChildren;

export function RadioGroup({ children }: RadioGroupProperties) {
    const [focus, setFocus] = useState(false);

    const classNames = [classes.card];
    if (focus) {
        classNames.push(classes.cardFocus);
    }

    const className = classNames.join(" ");

    return (
        <div
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
            className={className}
        >
            {children}
        </div>
    );
}
