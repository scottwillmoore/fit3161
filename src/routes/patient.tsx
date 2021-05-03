import React from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";

export default function Patient() {
    const { path } = useRouteMatch();

    const { id } = useParams<{ id: string }>();

    return (
        <Switch>
            <Route path={`${path}/abs`}></Route>
            <Route path={`${path}/analysis`}></Route>
            <Route path={`${path}/wptas`}></Route>
            <Route path={path}></Route>
        </Switch>
    );
}
