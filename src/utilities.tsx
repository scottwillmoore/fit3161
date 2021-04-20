import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type Join<T, U> = T & Omit<U, keyof T>;

export type As = ElementType;

export type WithAs<T extends As> = Join<
    { as?: T },
    ComponentPropsWithoutRef<T>
>;

export type WithChildren = {
    children?: ReactNode;
};

export type WithClassName = {
    className?: string;
};
