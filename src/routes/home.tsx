import { ChangeEventHandler, Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import QrReader from "react-qr-reader";

import { Button, ButtonGroup, Input } from "@/components";
import { Flame, Search } from "@/icons";
import { generateId, validateId } from "@/models";

import classes from "./home.module.scss";

export function Home() {
    const history = useHistory();

    /** Placeholder for the patientId */
    const [patientId, setPatientId] = useState("jhb279PGiy6Jj216JzWWVm");

    /**
     * Handle QR code data when a scan is completed
     * If there is data and the data is valid, set the current
     * PatientId to the unique identifier that has been scanned.
     * If the QR Code scanned is not a unique identifier created
     * for the system, ignore it.
     */
    const handleScan = (data: string | null) => {
        if (data && validateId(data)) {
            setPatientId(data);
        }
    };

    /** Handle any errors that the QR Code Reader returns */
    const handleError = (error: any) => {
        console.log(error);
    };

    /** When the input has a new unique identifier, set the PatientId to this identifier */
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPatientId(event.target.value);
    };

    /** Generate a random unique identifier for a new patient */
    const handleRandomize = () => {
        setPatientId(generateId());
    };

    /** Route to the patient page for the current PatientId */
    const handleGo = () => {
        history.push(`/patient/${patientId}`);
    };

    return (
        <Fragment>
            <p>Please scan a patient QR-code below to get started!</p>
            /** QR Code Reader segment. On scan, run handleScan. If there is an
            error, run handleError. Other reader parameters are set here */
            <QrReader
                className={classes.qrReader}
                showViewFinder={false}
                onScan={handleScan}
                onError={handleError}
            />
            /** If there is a change in the patientId (whether from a scan or
            manual input) set the value of the input to this new value and
            trigger handleChange */
            <Input value={patientId} onChange={handleChange} />
            <ButtonGroup>
                /** Randomize option for creating a new patient */
                <Button
                    icon={Flame}
                    text="Randomize"
                    onClick={handleRandomize}
                />
                /** Go button to progress to the next page */
                <Button
                    variant="primary"
                    icon={Search}
                    text="Go"
                    onClick={handleGo}
                />
            </ButtonGroup>
        </Fragment>
    );
}
