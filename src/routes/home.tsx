import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, ButtonGroup, Input } from "@/components";
import { Star } from "@/icons";

export function Home() {
    const history = useHistory();

    const [patientId, setPatientId] = useState("da6v4m6f0g8lr9iq");

    const handleChange = (event: any) => {
        setPatientId(event.target.value);
    };

    const handleClick = () => {
        history.push(`/patient/${patientId}`);
    };

    return (
        <Fragment>
            <Input value={patientId} onChange={handleChange} />
            <ButtonGroup>
                <Button icon={Star} text="Go" onClick={handleClick} />
            </ButtonGroup>
        </Fragment>
    );
}
