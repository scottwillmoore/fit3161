import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, ButtonGroup, Input } from "@/components";
import { Flame, Search } from "@/icons";
import { generateId } from "@/models";

export function Home() {
    const history = useHistory();

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
