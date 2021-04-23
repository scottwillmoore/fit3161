import { useState } from "react";

import { ChildrenProps, classNames } from "app/utilities";

import classes from "./radio.module.scss";

export type RadioProps = {
    name: string;
    title: string;
    description: string;
};

export function Radio({ name, title, description }: RadioProps) {
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

export type RadioGroupProps = ChildrenProps;

export function RadioGroup({ children }: RadioGroupProps) {
    const [focus, setFocus] = useState(false);

    const className = classNames(classes.card, focus && classes.cardFocus);

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
