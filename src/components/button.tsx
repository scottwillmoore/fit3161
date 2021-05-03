import { Fragment } from "react";

import {
    As,
    AsProps,
    ChildrenProps,
    classNames,
    createElement,
} from "app/utilities";

import classes from "./button.module.scss";

function capitalize([first, ...rest]: string) {
    return `${first.toUpperCase()}${rest.join("")}`;
}

export type ButtonVariant = "primary" | "secondary" | "danger";

export type ButtonProps<T extends As> = {
    variant?: ButtonVariant;
    icon: any;
    text: string;
} & AsProps<T>;

export function Button<T extends As>({
    variant = "secondary",
    icon: Icon,
    text,
    as,
    asRef,
    className,
    ...props
}: ButtonProps<T>) {
    const mergedClassName = classNames(
        className,
        classes.button,
        classes[variant]
    );

    return createElement(
        as || "button",
        asRef,
        { className: mergedClassName, ...props },
        <Fragment>
            <Icon height="24" />
            <span className={classes.text}>{text}</span>
        </Fragment>
    );
}

export type ButtonGroupProps = ChildrenProps;

export function ButtonGroup({ children }: ButtonGroupProps) {
    return <div className={classes.buttonGroup}>{children}</div>;
}
