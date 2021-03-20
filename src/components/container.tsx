import { PropsWithChildren } from "react";

import css from "./container.module.css";

export interface ContainerProps extends PropsWithChildren<{}> {}

export function Container({ children, ...props }: ContainerProps) {
    return (
        <header className={css.page} {...props}>
            {children}
        </header>
    );
}
