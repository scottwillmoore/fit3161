import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, ButtonGroup, Input } from "@/components";
import { Flame, Search } from "@/icons";

import { v4 as generateId } from "uuid";

export function Home() {
    const history = useHistory();

    const [patientId, setPatientId] = useState(
        "01082134-42bf-4020-8c33-599fcb0b808e"
    );

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
