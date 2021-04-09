import Head from "next/head";
import { ArrowRightIcon, ClockIcon, DotsHorizontalIcon, XIcon } from "hero/outline";

import Page from "app/components/page";

function Card({ children }) {
    return <div className="border-gray-light divide-gray-light bg-white border divide-y">{children}</div>;
}

function Section({ children, className }) {
    return <div className={`flex p-2 ${className}`}>{children}</div>;
}

Card.Section = Section;

export default function Patient() {
    return (
        <Page
            title="Patient"
            labels={[
                { label: "Identity", value: "B7A4-2M5Z" },
                { label: "Date", value: "5th March 2020" },
            ]}
        >
            <Card>
                <Card.Section className="bg-purple-xlight flex items-center">
                    <ClockIcon className="w-3 h-3 opacity-80 flex-shrink-0 mr-2" />
                    <div className="">
                        <p className="text-small opacity-50">This test was last administered on</p>
                        <p className="opacity-80 text-small font-bold">Monday at 2pm</p>
                    </div>
                </Card.Section>
                <Card.Section>
                    <div className="flex-grow-1 mr-2">
                        <h2 className="mb-1 leading-tall font-bold">Agitated Behaviour Scale</h2>
                        <p className="text-small opacity-50">
                            The Agitated Behaviour Scale (ABS) measures behavioral aspects of agitation during the acute
                            phase of recovery from acquired brain injury including aspects of aggression, disinhibition,
                            and lability.
                        </p>
                    </div>
                    <ArrowRightIcon className="w-3 h-3 flex-shrink-0" />
                </Card.Section>
            </Card>
        </Page>
    );
}
