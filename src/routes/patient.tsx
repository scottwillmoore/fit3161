import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { Fragment } from "react";
import {
    Redirect,
    useHistory,
    useParams,
    useRouteMatch,
} from "react-router-dom";

import { Button, ButtonGroup, Card, CardSection, Spinner } from "@/components";
import {
    ArrowLeft,
    ArrowUpRight,
    Beaker,
    Calendar,
    Clock,
    Eye,
    Person,
    Plus,
    Share,
    Trash,
} from "@/icons";
import { usePatient } from "@/utilities";

import classes from "./patient.module.scss";

export type IconProps = {
    icon: any;
};

function Icon({ icon: Icon }: IconProps) {
    return <Icon className={classes.icon} height="24" />;
}

export type PropertyProps = {
    icon?: any;
    name: string;
    content: string;
};

export function Property({ icon, name, content }: PropertyProps) {
    return (
        <div className={classes.property}>
            {icon && <Icon icon={icon} />}
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

const dateFormat = "do MMMM yyyy";

function formatTimestamp(timestamp: Timestamp) {
    return format(timestamp.toDate(), dateFormat);
}

export function ViewPatient() {
    const history = useHistory();

    const { patientId } = useParams<{ patientId: string }>();
    const patient = usePatient(patientId);

    switch (patient.state) {
        case "idle":
        case "load":
            return <Spinner />;

        case "success":
            break;

        case "error":
            throw "Failure to get patient data";
    }

    if (!patient.value) {
        return <Redirect to={`/patient/${patientId}/new`} />;
    }

    const createdOn = formatTimestamp(patient.value.createdOn);
    const lastAccessedOn = formatTimestamp(patient.value.lastAccessedOn);

    const handleAnalysis = () => history.push(`/patient/${patientId}/analysis`);

    const handleExport = () => {};

    const handleDelete = () => history.push(`/patient/${patientId}/delete`);

    return (
        <Fragment>
            <Property icon={Person} name="Identification" content={patientId} />

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

export function NewPatient() {
    return (
        <Fragment>
            <p>The patient does not exist.</p>
            <ButtonGroup>
                <Button icon={ArrowLeft} text="Back" />
                <Button variant="primary" icon={Plus} text="Create" />
            </ButtonGroup>
        </Fragment>
    );
}

export function DeletePatient() {
    return (
        <Fragment>
            <p>Are you sure you want to delete the patient?</p>
            <ButtonGroup>
                <Button icon={ArrowLeft} text="Back" />
                <Button variant="danger" icon={Trash} text="Create" />
            </ButtonGroup>
        </Fragment>
    );
}
