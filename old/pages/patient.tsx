import Head from "next/head";

import Header from "app/components/header";

import {
    AlertIcon,
    ArrowRightIcon,
    ChevronLeftIcon,
    ClockIcon,
    KebabHorizontalIcon,
    ScreenFullIcon,
} from "@primer/octicons-react";

import css from "./patient.module.css";

function Card({ children }) {
    return <div className={css.headCard}>{children}</div>;
}

function Column({ children }) {
    return <div className={css.column}>{children}</div>;
}

function Row({ children }) {
    return <div className={css.row}>{children}</div>;
}

export default function Patient() {
    return (
        <div className={css.app}>
            <Head>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
            </Head>

            {/* <Header title="Patient" /> */}

            <header className={css.header}>
                <ChevronLeftIcon size={24} />
                <h1>Patient</h1>
                <KebabHorizontalIcon size={24} />
            </header>

            {/* <div className={css.headCard}>
                <h1>B7A4-2M5Z-ABX4-QP3L</h1>
                <ScreenFullIcon size={24} />
            </div> */}

            <Card>
                <h1>Westmead Post-Traumatic Amnesia Scale</h1>
                <Row>
                    <Column>
                        <p>Patient</p>
                        <h1>B7A42M5Z</h1>
                    </Column>
                    <Column>
                        <p>Question</p>
                        <h1>1 of 7</h1>
                    </Column>
                </Row>
            </Card>

            <div className={css.container}>
                <div className={css.card}>
                    <div className={`${css.cardItem} ${css.cardPurple}`}>
                        <div className={css.row}>
                            <div className={css.rowLeft}>
                                <ClockIcon size={16} />
                            </div>
                            <div className={css.rowMiddle}>
                                <p>This test was last administered on</p>
                                <h2>Monday at 2pm</h2>
                            </div>
                        </div>
                    </div>
                    <div className={css.cardItem}>
                        <div className={css.row}>
                            <div className={css.rowMiddle}>
                                <h1>Agitated Behaviour Scale</h1>
                                <p>
                                    The Agitated Behaviour Scale (ABS) measures behavioral aspects of agitation during
                                    the acute phase of recovery from acquired brain injury including aspects of
                                    aggression, disinhibition, and lability.
                                </p>
                            </div>
                            <div className={css.rowRight}>
                                <ArrowRightIcon size={24} />
                            </div>
                        </div>
                    </div>
                    <div className={`${css.cardItem} ${css.cardYellow}`}>
                        <div className={css.row}>
                            <div className={css.rowLeft}>
                                <AlertIcon size={16} />
                            </div>
                            <div className={css.rowMiddle}>
                                <p>You must select a response to the question.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
