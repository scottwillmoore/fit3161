import {
    Button,
    ButtonGroup,
    Card,
    CardSection,
    Frame,
    Radio,
    RadioGroup,
} from "app/components";

import { Beaker, Share, Trash } from "app/icons";

const responses = [
    {
        title: `Absent`,
        description: `The behaviour is not present.`,
    },
    {
        title: `Slight`,
        description: `The behavior is present, but does not prevent the conduct of other, contextually appropriate behavior.  The individual may redirect spontaneously, or the continuation of the agitated behavior does not disrupt appropriate behavior.`,
    },
    {
        title: `Moderate`,
        description: `The individual needs to be redirected from an agitated to an appropriate behavior, but benefits from such cues.`,
    },
    {
        title: `Extreme`,
        description: `The individual is not able to engage in appropriate behavior due to the interference of their agitated behavior, even when external cues or redirection is provided.`,
    },
];

export default function Index() {
    return (
        <Frame title="Index">
            <Card>
                <CardSection>
                    <p>Hello, world!</p>
                </CardSection>
            </Card>

            <RadioGroup>
                {responses.map((response) => (
                    <Radio name="response" {...response} />
                ))}
            </RadioGroup>

            <ButtonGroup>
                <Button variant="primary" icon={Beaker} text="Analysis" />
                <Button variant="secondary" icon={Share} text="Export" />
                <Button variant="danger" icon={Trash} text="Delete" />
            </ButtonGroup>
        </Frame>
    );
}
