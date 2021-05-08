import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, ButtonGroup, Input } from "@/components";
import { Flame, Search } from "@/icons";

import { v4 as generateId } from "uuid";

export function Home() {
    const history = useHistory();

    const [patientId, setPatientId] = useState("da6v4m6f0g8lr9iq");

    const handleChange = (event: any) => {
        setPatientId(event.target.value);
    };

    const handleRandom = () => {
        setPatientId(generateId());
    };

    const handleSearch = () => {
        history.push(`/patient/${patientId}`);
    };

    return (
        <Fragment>
            <Input value={patientId} onChange={handleChange} />
            <ButtonGroup>
                <Button icon={Flame} text="Random" onClick={handleRandom} />
                <Button icon={Search} text="Find" onClick={handleSearch} />
            </ButtonGroup>
        </Fragment>
    );
}
