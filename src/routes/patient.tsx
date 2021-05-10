import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { Fragment, useCallback, useState } from "react";
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
import { generateId, deletePatient, getPatient, newPatient } from "@/models";
import { useFirebase, useAsync } from "@/utilities";

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

    const testId = generateId();
    const handleClick = () => {
        history.push(`${url}/${path}/${testId}`);
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

export function Patient() {
    const history = useHistory();

    const { database } = useFirebase();
    const { patientId } = useParams<any>();

    const callback = useCallback(() => getPatient(database, patientId), [
        database,
        patientId,
    ]);

    const result = useAsync(callback);

    switch (result.state) {
        case "idle":
        case "load":
            return <Spinner />;

        case "success":
            if (!result.value) {
                return <Redirect to={`/patient/${patientId}/new`} />;
            }
            break;

        case "error":
            throw result.error;
            throw "Failure to get patient data";

        default:
            throw "UNREACHABLE";
    }

    // case "success":

    const handleAnalysis = () => history.push(`/patient/${patientId}/analysis`);

    const handleExport = () => history.push(`/patient/${patientId}/export`);

    const handleDelete = async () =>
        history.push(`/patient/${patientId}/delete`);

    const createdOn = formatTimestamp(result.value.createdOn);
    const lastAccessedOn = formatTimestamp(result.value.lastAccessedOn);

    return (
        <Fragment>
            <Property icon={Person} name="Identity" content={patientId} />

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

export function New() {
    const history = useHistory();

    const { database } = useFirebase();
    const { patientId } = useParams<any>();

    const callback = useCallback(() => newPatient(database, patientId), [
        database,
        patientId,
    ]);

    const [execute, setExecute] = useState(false);
    const result = useAsync(callback, execute);

    const handleBack = () => history.push(`/`);

    const handleCreate = async () => {
        setExecute(true);
    };

    switch (result.state) {
        case "idle":
            break;

        case "load":
            return <Spinner />;

        case "success":
            return <Redirect to={`/patient/${patientId}`} />;

        case "error":
        default:
            throw "Failure to get patient data";
    }

    // case "idle":

    return (
        <Fragment>
            <Property icon={Person} name="Identity" content={patientId} />
            <p>The patient with this identifier does not exist yet.</p>
            <ButtonGroup>
                <Button icon={ArrowLeft} text="Back" onClick={handleBack} />
                <Button
                    variant="primary"
                    icon={Plus}
                    text="Create"
                    onClick={handleCreate}
                />
            </ButtonGroup>
        </Fragment>
    );
}

export function Delete() {
    const history = useHistory();

    const { database } = useFirebase();
    const { patientId } = useParams<any>();

    const callback = useCallback(() => deletePatient(database, patientId), [
        database,
        patientId,
    ]);

    const [execute, setExecute] = useState(false);
    const result = useAsync(callback, execute);

    const handleBack = () => history.push(`/patient/${patientId}`);

    const handleDelete = async () => {
        setExecute(true);
    };

    switch (result.state) {
        case "idle":
            break;

        case "load":
            return <Spinner />;

        case "success":
            return <Redirect to={`/`} />;

        case "error":
        default:
            throw "Failure to get patient data";
    }

    // case "idle":

    return (
        <Fragment>
            <Property icon={Person} name="Identity" content={patientId} />
            <p>Are you sure you want to delete this patient?</p>
            <ButtonGroup>
                <Button icon={ArrowLeft} text="Back" onClick={handleBack} />
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
