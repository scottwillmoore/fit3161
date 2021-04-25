import { Button, ButtonGroup, Card, CardSection, Frame } from "app/components";
import { Share, Trash, Beaker, Clippy, ArrowUpRight, Clock } from "app/icons";

import classes from "./patient.module.scss";

const actions: ActionProps[] = [
    {
        title: `Agitated Behaviour Scale`,
        description: `The Agitated Behaviour Scale (ABS) measures behavioral aspects of agitation during the acute phase of recovery from acquired brain injury including aspects of aggression, disinhibition, and lability.`,
    },
    {
        title: `Westmead Post-Traumatic Amnesia Scale`,
        description: `The Westmead Post-traumatic Amnesia Scale (WPTAS) measures the duration and severity of post-traumatic amnesia aquired from brain injury.`,
    },
];

export type ActionProps = {
    title: string;
    description: string;
};

export function Action({ title, description }: ActionProps) {
    return (
        <Card as="button" className={classes.card}>
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

export default function Patient() {
    return (
        <Frame title="Patient">
            {actions.map(Action)}

            <ButtonGroup>
                <Button variant="secondary" icon={Beaker} text="Analysis" />
                <Button variant="secondary" icon={Share} text="Export" />
                <Button variant="danger" icon={Trash} text="Delete" />
            </ButtonGroup>
        </Frame>
    );
}
