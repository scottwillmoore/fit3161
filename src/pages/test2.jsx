import { ArrowRightIcon } from "@primer/octicons-react";
import css from "./test.module.css";

export default function Test2() {
    return (
        <div className={css.container}>
            <div className={css.inputGroup}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Sarah" />
            </div>
            <div className={css.inputGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="agagewge5" />
            </div>
            <button className={css.button}>
                Sign In
                <ArrowRightIcon size={24} />
            </button>
            <a href="#" className={css.link}>
                Forgot password?
            </a>
        </div>
    );
}
