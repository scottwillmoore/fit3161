import {
    BeakerIcon,
    BookIcon,
    PersonIcon,
    HourglassIcon,
    HistoryIcon,
    Container,
    Header,
    Main,
} from "app/components";

import css from "./test.module.css";

export default function PatientPage() {
    return (
        <Container title="Patient" description="">
            <Header>
                <h1>Patient</h1>
                <p>
                    <PersonIcon size={12} /> Patient ID: ******{" "}
                    <HourglassIcon size={12} /> 01/01/2021
                </p>
            </Header>
            <Main>
                <form className={css.form}>
                    <div className={css.question}>
                        <h1>
                            <BookIcon size={24} /> Test Selection
                        </h1>
                        <p>Please select the test you with to administer</p>
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
                            <h1>Westmead Post Traumatic Test Scale</h1>
                            <p>
                                Measures length of post-traumatic amnesia (PTA)
                                in people with traumatic brain injury
                            </p>
                        </div>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="answer"
                            value="slight"
                            className={css.hidden}
                        />
                        <div className={css.card}>
                            <h1>Agitated Behaviour Scale</h1>
                            <p>
                                Measures behavioral aspects of agitation during
                                the acute phase of recovery from acquired brain
                                injury
                            </p>
                        </div>
                    </label>
                </form>

                <div className={css.question}>
                    <h1>
                        <BeakerIcon size={24} /> Analysis
                    </h1>
                </div>

                <div className={css.question}>
                    <h1>
                        <HistoryIcon size={24} /> History
                    </h1>
                </div>

                <div className={css.card}>
                    <p>WPTAS 01/01/2021 12:00am</p>
                    <p>ABS 01/01/2021 12:00am</p>
                    <p>WPTAS 02/01/2021 12:00am</p>
                    <p>ABS 02/01/2021 12:00am</p>
                </div>
            </Main>
        </Container>
    );
}
