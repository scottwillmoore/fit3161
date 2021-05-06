import { Fragment } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";

import { Header, Navigation } from "@/components";
import { Abs, Analysis, Wptas, Patient, Home } from "@/routes";

import classes from "./app.module.scss";

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home,
    },
    {
        name: "Patient",
        path: "/patient/:patientId",
        component: Patient,
    },
    {
        name: "Agitated Behaviour Scale",
        path: "/patient/:patientId/abs",
        component: Abs,
    },
    {
        name: "Analysis",
        path: "/patient/:patientId/wptas",
        component: Analysis,
    },
    {
        name: "Westmead Post-Traumatic Amnesia Scale",
        path: "/patient/:patientId/wptas",
        component: Wptas,
    },
];

export function App() {
    const match = useRouteMatch<any>();
    const history = useHistory();

    console.log(match);

    const handleBack = history.goBack;

    const handleMenu = alert;

    return (
        <div className={classes.app}>
            <Navigation onBack={handleBack} onMenu={handleMenu} />

            <main className={classes.container}>
                <Switch>
                    {routes.map(({ path, name, component: Component }, key) => (
                        <Route
                            key={key}
                            exact
                            path={path}
                            render={({ match }) => {
                                const isMatch = (path: string) =>
                                    match.path.includes(path);

                                const expandPath = (path: string) =>
                                    Object.keys(match.params).length
                                        ? Object.keys(match.params).reduce(
                                              (path, param) =>
                                                  path.replace(
                                                      `:${param}`,
                                                      match.params[param]!
                                                  ),
                                              path
                                          )
                                        : path;

                                const breadcrumbs = routes
                                    .filter(({ path }) => isMatch(path))
                                    .map(({ path, name }) => ({
                                        path: expandPath(path),
                                        name,
                                    }));
                                return (
                                    <Fragment>
                                        <Header
                                            title={name}
                                            breadcrumbs={breadcrumbs}
                                        />
                                        <Component />
                                    </Fragment>
                                );
                            }}
                        />
                    ))}
                </Switch>
            </main>
        </div>
    );
}
