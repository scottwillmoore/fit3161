import { Route, Switch, useHistory } from "react-router-dom";

import { Button, ButtonGroup } from "@/components";
import { Star, ChevronLeft, KebabHorizontal } from "@/icons";
import { Patient } from "@/routes";

import classes from "./app.module.scss";

export function App() {
    const title = "Title";

    const history = useHistory();

    return (
        <div className={classes.app}>
            <header className={classes.header}>
                <nav className={classes.navigation}>
                    <button
                        className={classes.button}
                        onClick={() => {
                            history.push("/");
                        }}
                    >
                        <ChevronLeft height="24" />
                    </button>

                    <h1 className={classes.title}>{title}</h1>
                    <button className={classes.button}>
                        <KebabHorizontal height="24" />
                    </button>
                </nav>
            </header>
            <main className={classes.body}>
                <Switch>
                    <Route path="/patient/:id">
                        <Patient />
                    </Route>
                    <Route>
                        <ButtonGroup>
                            <Button
                                icon={Star}
                                text="Go"
                                onClick={() => {
                                    history.push("/patient/1");
                                }}
                            />
                        </ButtonGroup>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}
