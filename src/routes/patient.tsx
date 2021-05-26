import { format } from "date-fns";
import { FirebaseFirestore, Timestamp } from "firebase/firestore";
import { Fragment, useCallback, useEffect, useState } from "react";
import {
    Redirect,
    useHistory,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import QrCode from "react-qr-code";

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
    ScreenFull,
} from "@/icons";
import {
    PatientData,
    generateId,
    deletePatient,
    getPatient,
    newPatient,
} from "@/models";
import { useAsyncCallback, useFirebase } from "@/utilities";

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

type NewProps = {
    onComplete: () => void;
};

function New({ onComplete: onNew }: NewProps) {
    const history = useHistory();

    const { database } = useFirebase();
    const { patientId } = useParams<any>();

    const [state, callback] = useAsyncCallback(newPatient, [patientId]);

    const handleBack = () => history.push(`/`);

    const handleCreate = async () => {
        callback(database, patientId);
    };

    switch (state.type) {
        case "idle":
            // See below.
            break;

        case "load":
            return <Spinner />;

        case "success":
            onNew();
            return <Spinner />;

        case "failure":
            throw "Failure to create patient";

        default:
            throw "";
    }

    return (
        <Fragment>
            <Property icon={Person} name="Identifier" content={patientId} />
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

export type ViewProps = {
    patientData: PatientData;
};

function View({ patientData }: ViewProps) {
    const history = useHistory();

    const { patientId } = useParams<any>();

    const [expanded, setExpanded] = useState(false);

    /**
     * Handles the screenfull button press to set expanded true/false.
     * This is used by the QR Code div to show/hide the QR code.
     */
    const handleExpand = () => {
        setExpanded(!expanded);
    };

    /**
     * Route the user to the analysis page
     */
    const handleAnalysis = () => {
        history.push(`/patient/${patientId}/analysis`);
    };

    /**
     * Route the user to the export page
     */
    const handleExport = () => {
        history.push(`/patient/${patientId}/export`);
    };

    /**
     * Route the user to the delete user page
     */
    const handleDelete = () => {
        history.push(`/patient/${patientId}/delete`);
    };

    const createdOn = formatTimestamp(patientData.createdOn);
    const lastAccessedOn = formatTimestamp(patientData.lastAccessedOn);

    return (
        <Fragment>
            <div className={classes.identity}>
                <Property icon={Person} name="Identifier" content={patientId} />
                /** * Button to show/hide the QR Code of the patient. */
                <ScreenFull
                    height="24"
                    className={classes.expand}
                    onClick={handleExpand}
                />
            </div>
            /** Generates the QR Code of the patient when expanded is true. */
            {expanded && (
                <div className={classes.qrCode}>
                    <QrCode value={patientId} size={96} />
                </div>
            )}
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

export function Patient() {
    const { database } = useFirebase();
    const { patientId } = useParams<any>();

    const [state, callback] = useAsyncCallback(getPatient, [patientId]);

    useEffect(() => {
        callback(database, patientId);
    }, [callback]);

    const handleNew = () => {
        callback(database, patientId);
    };

    switch (state.type) {
        case "idle":
        case "load":
            return <Spinner />;

        case "success":
            if (state.value == undefined) {
                return <New onComplete={handleNew} />;
            }
            return <View patientData={state.value} />;

        case "failure":
            throw state.error;

        default:
            throw "";
    }
}

export function DeletePatient() {
    const history = useHistory();

    const { database } = useFirebase();
    const { patientId } = useParams<any>();

    const [state, callback] = useAsyncCallback(deletePatient, [patientId]);

    const handleBack = () => {
        history.push(`/patient/${patientId}`);
    };

    const handleDelete = async () => {
        callback(database, patientId);
    };

    switch (state.type) {
        case "idle":
            // See below.
            break;

        case "load":
            return <Spinner />;

        case "success":
            return <Redirect to={`/`} />;

        case "failure":
            throw "Failure to delete patient";

        default:
            throw "";
    }

    return (
        <Fragment>
            <Property icon={Person} name="Identifier" content={patientId} />
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
