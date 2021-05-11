import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, ButtonGroup, Input } from "@/components";
import { Flame, Search } from "@/icons";
import { generateId, validateId } from "@/models";

import QrReader from "react-qr-reader";

export function Home() {
    const history = useHistory();
    const [scanResultWebCam, setScanResultWebCam] = useState("");

    const [patientId, setPatientId] = useState("");
    //eEU9EsmPZiD4Y5VfDQgWLZ

    const handleChange = (event: any) => {
        setPatientId(event.target.value);
    };

    const handleRandom = () => {
        setPatientId(generateId());
    };

    const handleSearch = () => {
        history.push(`/patient/${patientId}`);
    };

    const handleErrorWebCam = (error) => {
        console.log(error);
    };

    const handleScanWebCam = (result) => {
        if (result) {
            if (!validateId(patientId)) {
                throw "Invalid patient identifier";
            }
            setPatientId(result);
        }
    };

    return (
        <Fragment>
            <Input value={patientId} onChange={handleChange} />
            <ButtonGroup>
                <Button icon={Flame} text="Random" onClick={handleRandom} />
                <Button icon={Search} text="Find" onClick={handleSearch} />
            </ButtonGroup>

            <QrReader
                delay={300}
                style={{ width: "100%" }}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
            />
        </Fragment>
    );
}
