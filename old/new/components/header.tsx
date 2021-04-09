import { XIcon, DotsHorizontalIcon } from "hero/outline";

import Container from "app/components/container";

function Navigation() {
    return (
        <div className="flex items-center justify-between pb-2">
            <button>
                <XIcon className="w-3 h-3" />
            </button>
            <button className="">
                <DotsHorizontalIcon className="w-3 h-3" />
            </button>
        </div>
    );
}

interface LabelProperties {
    label: string;
    value: string;
}

function Label({ label, value }: LabelProperties) {
    return (
        <div className="">
            <p className="opacity-70 text-small">{label}</p>
            <p className="font-bold">{value}</p>
        </div>
    );
}

export interface HeaderProperties {
    title: string;
    labels: [LabelProperties];
}

export default function Header({ title, labels }: HeaderProperties) {
    return (
        <div className="bg-blue-base text-white">
            <Container className="py-4 space-y-2">
                <Navigation />

                <h1 className="text-xlarge font-bold">{title}</h1>
                {labels && <div className="grid grid-cols-2">{labels.map(Label)}</div>}
            </Container>
        </div>
    );
}
