import { ArrowLeftIcon, ArrowRightIcon } from "@primer/octicons-react";

import css from "./test.module.css";

export default function Test() {
    return (
        <div className="app">
            <header>
                <h1>Title</h1>
            </header>

            <div className={css.container}>
                <div className={css.question}>
                    <p>How would you describe the patient on their</p>
                    <h1>Short attention span, easy distractibility, inability to concentrate.</h1>
                </div>
                <div className={css.card}>
                    <h1>Absent</h1>
                    <p>The behaviour is not present.</p>
                </div>
                <div className={css.card}>
                    <h1>Present to a slight degree</h1>
                    <p>
                        The behavior is present, but does not prevent the conduct of other,
                        contextually appropriate behavior. The individual may redirect
                        spontaneously, or the continuation of the agitated behavior does not disrupt
                        appropriate behavior.
                    </p>
                </div>
                <div className={css.card}>
                    <h1>Present to a moderate degree</h1>
                    <p>
                        The individual needs to be redirected from an agitated to an appropriate
                        behavior, but benefits from such cues.
                    </p>
                </div>
                <div className={css.card}>
                    <h1>Present to an extreme degree</h1>
                    <p>
                        The individual is not able to engage in appropriate behavior due to the
                        interference of their agitated behavior, even when external cues or
                        redirection is provided.
                    </p>
                </div>
                <button className={css.button}>
                    Previous question
                    <ArrowLeftIcon size={24} />
                </button>
                <button className={css.button}>
                    Next question
                    <ArrowRightIcon size={24} />
                </button>
            </div>
        </div>
    );
}
