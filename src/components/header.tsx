import { PropsWithChildren } from "react";

import css from "./header.module.css";

export interface HeaderProps extends PropsWithChildren<{}> {}

export function Header({ children, ...props }: HeaderProps) {
    return (
        <header className={css.header} {...props}>
            {children}
        </header>
    );
}
