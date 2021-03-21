import { ArrowLeftIcon, Header, Main, ArrowRightIcon, Button, Container } from "app/components";

import css from "./test.module.css";

export default function AbsQuestion() {
    return (
        <Container title="ABS Question" description="">
            <Header>
                <h1>ABS Question</h1>
                <p>TODO</p>
            </Header>
            <Main>
                <form className={css.form}>
                    <div className={css.question}>
                        <p>How would you describe the patient on their</p>
                        <h1>
                            Short attention span, easy distractibility and inability to concentrate.
                        </h1>
                    </div>
                    <label>
                        <input
                            type="radio"
                            name="answer"
                            value="absent"
                            required
                            className={css.hidden}
                        />
                        <div className={css.card}>
                            <h1>Absent</h1>
                            <p>The behaviour is not present.</p>
                        </div>
                    </label>

                    <label>
                        <input type="radio" name="answer" value="slight" className={css.hidden} />
                        <div className={css.card}>
                            <h1>Present to a slight degree</h1>
                            <p>
                                The behavior is present, but does not prevent the conduct of other,
                                contextually appropriate behavior. The individual may redirect
                                spontaneously, or the continuation of the agitated behavior does not
                                disrupt appropriate behavior.
                            </p>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="answer" value="moderate" className={css.hidden} />
                        <div className={css.card}>
                            <h1>Present to a moderate degree</h1>
                            <p>
                                The individual needs to be redirected from an agitated to an
                                appropriate behavior, but benefits from such cues.
                            </p>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="answer" value="extreme" className={css.hidden} />
                        <div className={css.card}>
                            <h1>Present to an extreme degree</h1>
                            <p>
                                The individual is not able to engage in appropriate behavior due to
                                the interference of their agitated behavior, even when external cues
                                or redirection is provided.
                            </p>
                        </div>
                    </label>
                    <Button type="button">
                        Previous question
                        <ArrowLeftIcon size={24} />
                    </Button>
                    <Button type="submit">
                        Next question
                        <ArrowRightIcon size={24} />
                    </Button>
                </form>
            </Main>
        </Container>
    );
}
