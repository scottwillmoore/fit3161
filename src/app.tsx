import { Fragment } from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    useHistory,
    useLocation,
    useRouteMatch,
} from "react-router-dom";

import { Header, Navigation } from "@/components";
import { Abs, Analysis, Home, Delete, New, Patient, Wptas } from "@/routes";
import { FirebaseProvider, useScrollReset } from "@/utilities";

import { ErrorBoundary } from "./error";

import classes from "./app.module.scss";

const firebaseOptions = {
    apiKey: "AIzaSyARrdJERMpllNpHFjiHV-AU14zOgrLkZIY",
    authDomain: "fit3161-67fad.firebaseapp.com",
    projectId: "fit3161-67fad",
};

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
        name: "New",
        path: "/patient/:patientId/new",
        component: New,
    },
    {
        name: "Delete",
        path: "/patient/:patientId/delete",
        component: Delete,
    },
    {
        name: "Agitated Behaviour Scale",
        path: "/patient/:patientId/abs",
        component: Abs,
    },
    {
        name: "Analysis",
        path: "/patient/:patientId/analysis",
        component: Analysis,
    },
    {
        name: "Westmead Post-Traumatic Amnesia Scale",
        path: "/patient/:patientId/wptas",
        component: Wptas,
    },
];

type ViewProps = {
    name: string;
    component: any;
};

function useBreadcrumbs() {
    const match = useRouteMatch<any>();

    return routes
        .filter(({ path }) => {
            return match.path.includes(path);
        })
        .map(({ name, path }) => {
            const expandedPath = Object.keys(match.params).reduce(
                (path, param) => path.replace(`:${param}`, match.params[param]),
                path
            );
            return { name, path: expandedPath };
        });
}

function View({ name, component: Component }: ViewProps) {
    const history = useHistory();

    const location = useLocation();
    useScrollReset([location]);

    const breadcrumbs = useBreadcrumbs();

    const handleBack = () => {
        if (breadcrumbs.length > 1) {
            const { path } = breadcrumbs[breadcrumbs.length - 2];
            history.push(path);
        }
    };

    const handleMenu = () => {};

    return (
        <Fragment>
            <Navigation onBack={handleBack} onMenu={handleMenu} />
            <main className={classes.view}>
                <Header title={name} breadcrumbs={breadcrumbs} />
                <Component />
            </main>
        </Fragment>
    );
}

export function App() {
    return (
        <div className={classes.app}>
            <ErrorBoundary>
                <FirebaseProvider options={firebaseOptions}>
                    <BrowserRouter>
                        <Switch>
                            {routes.map(({ name, path, component }, key) => (
                                <Route exact key={key} path={path}>
                                    <View name={name} component={component} />
                                </Route>
                            ))}
                            <Route>
                                <p>Not found!</p>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </FirebaseProvider>
            </ErrorBoundary>
        </div>
    );
}
