import { createElement } from "react";

import { As, Join, WithAs, WithChildren } from "app/utilities";

import classes from "./card.module.scss";

export type CardProps<T extends As> = Join<WithChildren, WithAs<T>>;

export function Card<T extends As>({ as, children, ...props }: CardProps<T>) {
    return createElement(
        as || "div",
        { className: classes.card, ...props },
        children
    );
}

export type SectionProps<T extends As> = Join<WithChildren, WithAs<T>>;

function Section<T extends As>({ as, children, ...props }: SectionProps<T>) {
    return createElement(
        as || "div",
        { className: classes.section, ...props },
        children
    );
}

Card.Section = Section;
