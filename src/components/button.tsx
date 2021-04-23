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

const buttonVariants = {
    primary: classes.buttonPrimary,
    secondary: classes.buttonSecondary,
    danger: classes.buttonDanger,
};

export type ButtonVariant = keyof typeof buttonVariants;

export type ButtonProps<T extends As> = {
    icon: any;
    text: string;
    variant: ButtonVariant;
} & AsProps<T>;

export function Button<T extends As>({
    icon: Icon,
    text,
    variant,
    as,
    asRef,
    ...props
}: ButtonProps<T>) {
    const className = classNames(classes.button, buttonVariants[variant]);

    return createElement(
        as || "button",
        asRef,
        { className, ...props },
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
