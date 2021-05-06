import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { Fragment } from "react";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";

import { Button, ButtonGroup, Card, CardSection, Spinner } from "@/components";
import {
    ArrowUpRight,
    Beaker,
    Calendar,
    Clock,
    Eye,
    Person,
    Share,
    Trash,
} from "@/icons";
import { classNames, usePatient } from "@/utilities";

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

export type IconProps = {
    variant?: "primary" | "secondary";
    icon: any;
};

function Icon({ variant = "secondary", icon: Icon }: IconProps) {
    return (
        <Icon
            className={classNames(classes.icon, classes[variant])}
            height="24"
        />
    );
}

export type PropertyProps = {
    variant?: "primary" | "secondary";
    icon?: any;
    name: string;
    content: string;
};

export function Property({
    variant = "secondary",
    icon,
    name,
    content,
}: PropertyProps) {
    return (
        <div className={classNames(classes.property, classes[variant])}>
            {icon && <Icon variant="secondary" icon={icon} />}
            <div className={classes.text}>
                <p className={classes.name}>{name}</p>
                <p className={classes.content}>{content}</p>
            </div>
        </div>
    );
}

type ActionProps = {
    title: string;
    description: string;
    path: string;
};

function Action({ title, description, path }: ActionProps) {
    const history = useHistory();
    const { url } = useRouteMatch();
    const handleClick = () => {
        history.push(`${url}/${path}`);
    };

    return (
        <Card as="button" className={classes.action} onClick={handleClick}>
            <CardSection>
                <div className={classes.header}>
                    <div className={classes.body}>
                        <h1 className={classes.title}>{title}</h1>
                        <p className={classes.description}>{description}</p>
                    </div>
                    <ArrowUpRight className={classes.arrow} height="24" />
                </div>
            </CardSection>

            <CardSection variant="secondary">
                <Property
                    icon={Clock}
                    name="Last Administered"
                    content={`11th December 2020`}
                />
            </CardSection>
        </Card>
    );
}

export function Patient() {
    const { patientId } = useParams<{ patientId: string }>();
    const history = useHistory();

    const patient = usePatient(patientId);

    if (!patient) {
        return <Spinner />;
    }

    const dateFormat = "do MMMM yyyy";
    const formatTimestamp = (timestamp: Timestamp) =>
        format(timestamp.toDate(), dateFormat);

    const createdOn = formatTimestamp(patient.createdOn);
    const lastAccessedOn = formatTimestamp(patient.lastAccessedOn);

    const handleAnalysis = () => history.push(`/patient/${patientId}/analysis`);

    const handleExport = () => {};

    const handleDelete = () => {};

    return (
        <Fragment>
            <Property
                variant="primary"
                icon={Person}
                name="Identity"
                content="123e4567-e89b-12d3-a456-426614174000"
            />

            <div className={classes.properties}>
                <Property name="Created" icon={Calendar} content={createdOn} />
                <Property
                    name="Last Viewed"
                    icon={Eye}
                    content={lastAccessedOn}
                />
            </div>

            {actions.map((action, key) => (
                <Action key={key} {...action} />
            ))}

            <ButtonGroup>
                <Button
                    variant="secondary"
                    icon={Beaker}
                    text="Analysis"
                    onClick={handleAnalysis}
                />
                <Button
                    variant="secondary"
                    icon={Share}
                    text="Export"
                    onClick={handleExport}
                />
                <Button
                    variant="danger"
                    icon={Trash}
                    text="Delete"
                    onClick={handleDelete}
                />
            </ButtonGroup>
        </Fragment>
    );
}
