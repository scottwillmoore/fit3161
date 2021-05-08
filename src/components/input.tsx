import { createElement, AsProps, classNames } from "@/utilities";

import classes from "./input.module.scss";

export type InputProps = AsProps<"input">;

export function Input({ asRef, ...props }: InputProps) {
    return createElement("input", asRef, {
        className: classes.input,
        ...props,
    });
}
