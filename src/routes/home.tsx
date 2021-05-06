import { useHistory } from "react-router-dom";

import { Button, ButtonGroup } from "@/components";
import { Star } from "@/icons";

export function Home() {
    const history = useHistory();

    const handleClick = () => {
        history.push("/patient/da6v4m6f0g8lr9iq");
    };

    return (
        <ButtonGroup>
            <Button icon={Star} text="Go" onClick={handleClick} />
        </ButtonGroup>
    );
}
