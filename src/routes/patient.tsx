import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";

import { Button, ButtonGroup, Card, CardSection } from "@/components";
import { Share, Trash, Beaker, Clippy, ArrowUpRight, Clock } from "@/icons";
import { Test } from "@/routes";

import classes from "./patient.module.scss";

const actions: ActionProps[] = [
    {
        title: `Agitated Behaviour Scale`,
        description: `The Agitated Behaviour Scale (ABS) measures behavioral aspects of agitation during the acute phase of recovery from acquired brain injury including aspects of aggression, disinhibition, and lability.`,
        path: "abs",
    },
    {
        title: `Westmead Post-Traumatic Amnesia Scale`,
        description: `The Westmead Post-traumatic Amnesia Scale (WPTAS) measures the duration and severity of post-traumatic amnesia aquired from brain injury.`,
        path: "wptas",
    },
];

export type ActionProps = {
    title: string;
    description: string;
    path: string;
};

export function Action({ title, description, path }: ActionProps) {
    const history = useHistory();
    const { url } = useRouteMatch();

    const handleClick = () => {
        history.push(`${url}/${path}`);
    };

    return (
        <Card as="button" className={classes.card} onClick={handleClick}>
            <CardSection>
                <div className={classes.header}>
                    <div className={classes.box}>
                        <Clippy height="24" />
                    </div>
                    <ArrowUpRight className={classes.arrow} height="24" />
                </div>
                <div className={classes.body}>
                    <h1 className={classes.title}>{title}</h1>
                    <p className={classes.description}>{description}</p>
                </div>
            </CardSection>
            <CardSection variant="secondary">
                <div className={classes.footer}>
                    <Clock height="24" />
                    <div className={classes.column}>
                        <p className={classes.subtitle}>Last Administered</p>
                        <p className={classes.date}>11th December '20</p>
                    </div>
                </div>
            </CardSection>
        </Card>
    );
}

export function Patient() {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/abs`}>
                <Test />
            </Route>
            <Route>
                {actions.map(Action)}

                <ButtonGroup>
                    <Button variant="secondary" icon={Beaker} text="Analysis" />
                    <Button variant="secondary" icon={Share} text="Export" />
                    <Button variant="danger" icon={Trash} text="Delete" />
                </ButtonGroup>
            </Route>
        </Switch>
    );
}
