import { Fragment, createElement } from "react";

import { As, WithAs, WithChildren } from "app/utilities";

import classes from "./button.module.scss";

function capitalize([first, ...rest]: string) {
    return `${first.toUpperCase()}${rest.join("")}`;
}

export type ButtonVariant = "primary" | "secondary" | "danger";

export type ButtonProperties<T extends As> = WithAs<T> & {
    icon: any;
    text: string;
    variant: ButtonVariant;
};

export function Button<T extends As>({
    as,
    icon,
    text,
    variant,
    ...properties
}: ButtonProperties<T>) {
    const classNames = [];
    classNames.push(classes.button);
    classNames.push(classes[`button${capitalize(variant)}`]);

    const className = classNames.join(" ");

    return createElement(
        as || "button",
        { className, ...properties },
        <Fragment>
            {createElement(icon, { height: "24" })}
            <span className={classes.text}>{text}</span>
        </Fragment>
    );
}

export type ButtonGroupProperties = WithChildren;

export function ButtonGroup({ children }: ButtonGroupProperties) {
    return <div className={classes.buttonGroup}>{children}</div>;
}
