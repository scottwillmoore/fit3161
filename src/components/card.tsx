import { createElement } from "react";

import { As, WithAs, WithChildren } from "app/utilities";

import classes from "./card.module.scss";

type Join<T, U> = T & Omit<U, keyof T>;

export type CardProps<T extends As> = Join<WithChildren, WithAs<T>>;

export function Card<T extends As>({ as, children, ...props }: CardProps<T>) {
    return createElement(
        as || "div",
        { className: classes.card, ...props },
        children
    );
}
