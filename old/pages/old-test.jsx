import Head from "next/head";
import { InformationCircleIcon } from "hero/outline";

import Button from "app/components/button";
import Container from "app/components/container";
import Page from "app/components/page";

function Card({ children }) {
    return <div className="border-gray-light divide-gray-light bg-white border divide-y">{children}</div>;
}

function Section({ children, className }) {
    return <div className={`p-2 ${className}`}>{children}</div>;
}

function Choice({ choice, description }) {
    return (
        <Section className="bg-gray-xlight flex items-center">
            <div className="mr-2">o</div>

            <div>
                <h3 className="mb-0.5 font-bold">{choice}</h3>
                <p className="text-small opacity-50">{description}</p>
            </div>
        </Section>
    );
}

function Question({ prelude, question, choices }) {
    return (
        <Card>
            <Section>
                <p className="mb-0.5 text-small opacity-50">{prelude}</p>
                <h2 className="text-large font-bold">{question}</h2>
            </Section>
            {choices.map(Choice)}
        </Card>
    );
}

Card.Section = Section;

export default function Patient() {
    return (
        <Page
            title="Westmead Post-Traumatic Amnesia Scale"
            labels={[
                { label: "Identity", value: "B7A4-2M5Z" },
                { label: "Question", value: "1 of 7" },
            ]}
        >
            <Question
                prelude="Observe the patient on their"
                question="Short attention span, easy distractibility, inability to concentrate."
                choices={[
                    {
                        choice: "Absent",
                        description: "The behaviour is not present.",
                    },
                    {
                        choice: "Present to a slight degree",
                        description:
                            "The behavior is present, but does not prevent the conduct of other, contextually appropriate behavior.  The individual may redirect spontaneously, or the continuation of the agitated behavior does not disrupt appropriate behavior.",
                    },
                    {
                        choice: "Present to a moderate degree",
                        description:
                            "The individual needs to be redirected from an agitated to an appropriate behavior, but benefits from such cues.",
                    },
                    {
                        choice: "Present to an extreme degree",
                        description:
                            "The individual is not able to engage in appropriate behavior due to the interference of their agitated behavior, even when external cues or redirection is provided.",
                    },
                ]}
            />

            <Button>Submit</Button>
        </Page>
    );
}
