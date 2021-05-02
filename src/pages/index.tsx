import {
    Button,
    ButtonGroup,
    Card,
    CardSection,
    Frame,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup
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

const images = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
    "img6",
    "img7",
    "img8",
    "img9",
];

export default function Index() {
    return (
        <Frame title="Index">
            <Card>
                <CardSection>
                    <p>Hello, world!</p>
                </CardSection>
                <CardSection variant="secondary">
                    <p>Hello, world!</p>
                </CardSection>
            </Card>

            <h1>
                "Short attention span, easy distractibility, inability to
                concentrate."
            </h1>
            <p>
                Select the option which best describes this behaviour of the
                patient.
            </p>

            <RadioGroup>
                {responses.map((response) => (
                    <Radio name="response" {...response} />
                ))}
            </RadioGroup>
            
            <CheckboxGroup>
                {images.map((image) => (
                    <Checkbox name="image" {...image} />
                ))}
            </CheckboxGroup>

            <ButtonGroup>
                <Button variant="primary" icon={Beaker} text="Analysis" />
                <Button variant="secondary" icon={Share} text="Export" />
                <Button variant="danger" icon={Trash} text="Delete" />
            </ButtonGroup>
        </Frame>
    );
}
