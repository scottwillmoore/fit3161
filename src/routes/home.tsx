import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, ButtonGroup, Input } from "@/components";
import { Flame, Search } from "@/icons";
import { generateId } from "@/models";

import QRCode from "qrcode";
import QrReader from "react-qr-reader";

export function Home() {
    const history = useHistory();
    const [imageUrl, setImageUrl] = useState("");
    const [scanResultWebCam, setScanResultWebCam] = useState("");

    const [patientId, setPatientId] = useState("eEU9EsmPZiD4Y5VfDQgWLZ");

    const handleChange = (event: any) => {
        setPatientId(event.target.value);
    };

    const handleRandom = () => {
        setPatientId(generateId());
    };

    const handleSearch = () => {
        history.push(`/patient/${patientId}`);
    };

    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(patientId);
            setImageUrl(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleErrorWebCam = (error) => {
        console.log(error);
    };

    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result);
        }
    };

    return (
        <Fragment>
            <Input value={patientId} onChange={handleChange} />
            <ButtonGroup>
                <Button icon={Flame} text="Random" onClick={handleRandom} />
                <Button icon={Search} text="Find" onClick={handleSearch} />
                <Button
                    icon={ScreenFull}
                    text="Generate"
                    onClick={generateQrCode}
                />
            </ButtonGroup>

            {imageUrl ? (
                <img src={imageUrl} alt="img" width="200" height="200" />
            ) : null}

            <QrReader
                delay={300}
                style={{ width: "100%" }}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
            />

            <Input value={scanResultWebCam} />
        </Fragment>
    );
}
