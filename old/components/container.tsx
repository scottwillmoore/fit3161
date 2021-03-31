import { PropsWithChildren } from "react";
import Head from "next/head";

import css from "./container.module.css";

export interface ContainerProps extends PropsWithChildren<{}> {
    title: string;
    description: string;
}

export function Container({
    title,
    description,
    children,
    ...props
}: ContainerProps) {
    return (
        <div className={css.container} {...props}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            {children}
        </div>
    );
}
