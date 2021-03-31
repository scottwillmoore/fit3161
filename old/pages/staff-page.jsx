import {
    PersonIcon,
    HourglassIcon,
    Container,
    Header,
    Main,
    ScreenFullIcon,
} from "app/components";

import css from "./test.module.css";

export default function StaffPage() {
    return (
        <Container title="Staff" description="">
            <Header>
                <h1>Home</h1>
                <p>
                    <PersonIcon size={12} /> Staff ID: ******{" "}
                    <HourglassIcon size={12} /> 01/01/2021
                </p>
            </Header>
            <Main>
                <div className={css.card}>
                    <p>
                        <PersonIcon size={36} /> You are logged in as
                        <h1>Jason</h1>
                    </p>
                </div>

                <div className={css.card}>
                    <h1>
                        <ScreenFullIcon size={24} /> Scan QR Code
                    </h1>
                </div>
            </Main>
        </Container>
    );
}
