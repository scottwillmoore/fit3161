import Head from "next/head";

import { Fragment } from "react";

import { ChildrenProps } from "app/utilities";
import { ChevronLeft, KebabHorizontal } from "app/icons";

import classes from "./frame.module.scss";

export type HeaderProps = {
    title: string;
};

function Header({ title }: HeaderProps) {
    return (
        <header className={classes.header}>
            <nav className={classes.navigation}>
                <button>
                    <ChevronLeft height="24" />
                </button>
                <h1 className={classes.title}>{title}</h1>
                <button>
                    <KebabHorizontal height="24" />
                </button>
            </nav>
        </header>
    );
}

export type BodyProps = ChildrenProps;

function Body({ children }: BodyProps) {
    return <main className={classes.body}>{children}</main>;
}

export type FrameProps = {
    title: string;
} & ChildrenProps;

export function Frame({ title, children }: FrameProps) {
    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />

                <title>{title}</title>
            </Head>

            <div className={classes.frame}>
                <Header title={title} />
                <Body>{children}</Body>
            </div>
        </Fragment>
    );
}
