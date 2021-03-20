import { PropsWithChildren } from "react";

import css from "./main.module.css";

export interface MainProps extends PropsWithChildren<{}> {}

export function Main({ children, ...props }: MainProps) {
    return (
        <main className={css.main} {...props}>
            {children}
        </main>
    );
}
