import { PropsWithChildren, ButtonHTMLAttributes } from "react";

import css from "./button.module.css";

export interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
    type: "submit" | "reset" | "button";
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button className={css.button} {...props}>
            {children}
        </button>
    );
}
