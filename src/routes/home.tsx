import { ChangeEventHandler, Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import QrReader from "react-qr-reader";

import { Button, ButtonGroup, Input } from "@/components";
import { Flame, Search } from "@/icons";
import { generateId, validateId } from "@/models";

import classes from "./home.module.scss";

export function Home() {
    const history = useHistory();

    const [patientId, setPatientId] = useState("eEU9EsmPZiD4Y5VfDQgWLZ");

    const handleScan = (data: string | null) => {
        if (data && validateId(data)) {
            setPatientId(data);
        }
    };

    const handleError = (error: any) => {
        console.log(error);
    };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPatientId(event.target.value);
    };

    const handleRandomize = () => {
        setPatientId(generateId());
    };

    const handleGo = () => {
        history.push(`/patient/${patientId}`);
    };

    return (
        <Fragment>
            <p>Please scan a patient QR-code below to get started!</p>

            <QrReader
                className={classes.qrReader}
                showViewFinder={false}
                onScan={handleScan}
                onError={handleError}
            />

            <Input value={patientId} onChange={handleChange} />

            <ButtonGroup>
                <Button
                    icon={Flame}
                    text="Randomize"
                    onClick={handleRandomize}
                />
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
