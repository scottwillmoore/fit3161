import {
    ComponentProps,
    ComponentPropsWithoutRef,
    ElementType,
    ReactNode,
    createElement as reactCreateElement,
} from "react";

export type Expand<T> = T extends infer TObject
    ? { [TKey in keyof TObject]: TObject[TKey] }
    : never;

export type RecursiveExpand<T> = T extends object
    ? T extends infer TObject
        ? { [TKey in keyof TObject]: TObject[TKey] }
        : never
    : T;

type BinaryJoin<T, U> = T & Omit<U, keyof T>;

export type Join<T extends any[]> = T extends [infer THead, ...infer TRest]
    ? TRest extends [infer TTail]
        ? BinaryJoin<THead, TTail>
        : BinaryJoin<THead, Join<TRest>>
    : never;

export type As = ElementType;

export type AsRef<T extends As> = ComponentProps<T>["ref"];

export type AsProps<T extends As = "div"> = Join<
    [
        {
            as?: T;
            asRef?: AsRef<T>;
        },
        ComponentPropsWithoutRef<T>
    ]
>;

export type ChildrenProps<T extends ReactNode = ReactNode> = {
    children?: T;
};

export type ClassName = undefined | null | false | string;

export function classNames(...classes: ClassName[]): string {
    return classes.filter(Boolean).join(" ");
}

export function createElement<T extends As>(
    as: T,
    asRef: AsRef<T>,
    props: any,
    children?: ReactNode
) {
    return reactCreateElement(as, { ref: asRef, ...props }, children);
}
