import {
    As,
    AsProps,
    ChildrenProps,
    classNames,
    createElement,
} from "app/utilities";

import classes from "./card.module.scss";

const CARD_DEFAULT_AS = "div";

export type CardProps<T extends As> = AsProps<T> & ChildrenProps;

export function Card<T extends As>({
    as,
    asRef,
    className,
    children,
    ...props
}: CardProps<T>) {
    const mergedClassNames = classNames(className, classes.card);

    return createElement(
        as || CARD_DEFAULT_AS,
        asRef,
        { className: mergedClassNames, ...props },
        children
    );
}

const CARD_SECTION_DEFAULT_AS = "div";

const cardSectionVariants = {
    primary: classes.cardSectionPrimary,
    secondary: classes.cardSectionSecondary,
};

export type CardSectionVariant = keyof typeof cardSectionVariants;

export type CardSectionProps<T extends As> = {
    variant?: CardSectionVariant;
} & AsProps<T> &
    ChildrenProps;

export function CardSection<T extends As>({
    variant = "primary",
    as,
    asRef,
    children,
    className,
    ...props
}: CardSectionProps<T>) {
    const mergedClassNames = classNames(
        className,
        classes.cardSection,
        cardSectionVariants[variant]
    );

    return createElement(
        as || CARD_SECTION_DEFAULT_AS,
        asRef,
        { className: mergedClassNames, ...props },
        children
    );
}
