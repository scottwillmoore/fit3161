import {
    ArrowRightIcon,
    Button,
    Container,
    Header,
    Main,
    PasswordInput,
    TextInput,
} from "components";

import css from "./test.module.css";

export default function SignIn() {
    return (
        <Container>
            <Header>
                <h1>Sign In</h1>
                <p>Please use the form below to sign in</p>
            </Header>
            <Main>
                <form className={css.form}>
                    <TextInput label="Username" name="username" required />
                    <PasswordInput label="Password" name="password" required />
                    <Button type="submit">
                        Sign In
                        <ArrowRightIcon size={24} />
                    </Button>
                </form>
                <a href="#" className={css.link}>
                    Forgot password?
                </a>
            </Main>
        </Container>
    );
}
