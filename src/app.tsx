import { Route, Switch } from "react-router-dom";

import { ChevronLeft, KebabHorizontal } from "@/icons";

import classes from "./app.module.scss";

export default function App() {
    return (
        <div className={classes.app}>
            <header className={classes.header}>
                <nav className={classes.navigation}>
                    <button className={classes.button}>
                        <ChevronLeft height="24" />
                    </button>

                    <h1 className={classes.title}>Title</h1>
                    <button className={classes.button}>
                        <KebabHorizontal height="24" />
                    </button>
                </nav>
            </header>
            <main className={classes.body}>
                <Switch>
                    <Route path="/patient/:id">
                        <p>Patient</p>
                    </Route>
                    <Route>
                        <p>Home</p>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}
