import Head from "next/head";

import {
    BeakerIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClipboardIcon,
    ClockIcon,
    DotsHorizontalIcon,
    EyeIcon,
    LightningBoltIcon,
    ShareIcon,
    TrashIcon,
    UserIcon,
} from "hero/outline";

import { Children } from "app/utilities";

export interface NavigationProperties {
    title: string;
}

export function Navigation({ title }: NavigationProperties) {
    return (
        <div className="flex flex-row items-center justify-between space-x-2">
            <button>
                <ChevronLeftIcon className="w-3 h-3" />
            </button>
            <h1 className="text-xlarge font-bold">{title}</h1>
            <button>
                <DotsHorizontalIcon className="w-3 h-3" />
            </button>
        </div>
    );
}

export interface BoxProperties extends Children {
    variant: "light" | "dark";
}

export function Box({ variant, children }: BoxProperties) {
    const classes = variant == "light" ? "text-black bg-white" : "text-white bg-black";
    return <div className={`p-1 rounded ${classes}`}>{children}</div>;
}

export interface AttributeProperties {
    variant: "light" | "dark";
    icon: any;
    name: string;
    value: string;
}

export function Attribute({ variant, icon: Icon, name, value }: AttributeProperties) {
    const classes = variant == "light" ? "text-black bg-white" : "text-white bg-black";
    return (
        <div className="flex flex-row items-center space-x-2">
            <Box variant={variant}>
                <Icon className="w-3 h-3" />
            </Box>
            <div className="flex flex-col">
                <p className="text-small">{name}</p>
                <p className="text-small font-bold">{value}</p>
            </div>
        </div>
    );
}

export interface TestProperties {
    name: string;
    description: string;
    attributes: Array<Omit<AttributeProperties, "variant">>;
}

export function Test({ name, description, attributes }: TestProperties) {
    return (
        <button className="flex flex-row items-center p-2 text-left text-white bg-black rounded space-x-2">
            <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-1">
                    <h1 className="text-xlarge font-bold">{name}</h1>
                    <p className="text-small">{description}</p>
                </div>
                {attributes && attributes.map((attribute) => Attribute({ variant: "light", ...attribute }))}
            </div>
            <ChevronRightIcon className="flex-shrink-0 w-3 h-3" />
        </button>
    );
}

export interface ActionProperties {
    icon: any;
    name: string;
}

export function Action({ icon: Icon, name }: ActionProperties) {
    return (
        <button className="focus:ring-secondary flex flex-row items-center justify-between p-2 text-left text-white bg-black rounded space-x-2 focus:ring-offset-1 focus:ring">
            <Box variant="light">
                <Icon className="w-3 h-3" />
            </Box>
            <h1 className="flex-grow font-bold">{name}</h1>
            <ChevronRightIcon className="w-3 h-3" />
        </button>
    );
}

export default function Patient() {
    const title = `Patient`;

    const attributes = [
        {
            icon: UserIcon,
            name: `Identified by`,
            value: `B7A4-2M5Z`,
        },
        {
            icon: ClipboardIcon,
            name: `Tests administered`,
            value: `22 times`,
        },
        {
            icon: LightningBoltIcon,
            name: `Created on`,
            value: `3rd October '20`,
        },
        {
            icon: EyeIcon,
            name: `Last seen on`,
            value: `3rd October '20`,
        },
    ];

    const tests = [
        {
            name: `Westmead Post-Traumatic Amnesia Scale`,
            description: `The Westmead Post-traumatic Amnesia Scale (WPTAS) measures the duration and severity of post-traumatic amnesia aquired from brain injury.`,
            attributes: [
                {
                    icon: ClockIcon,
                    name: `Last administered on`,
                    value: `11th December '20`,
                },
            ],
        },
        {
            name: `Agitated Behaviour Scale`,
            description: `The Agitated Behaviour Scale (ABS) measures behavioral aspects of agitation during the acute phase of recovery from acquired brain injury including aspects of aggression, disinhibition, and lability.`,
            attributes: [
                {
                    icon: ClockIcon,
                    name: `Last administered on`,
                    value: `11th December '20`,
                },
            ],
        },
    ];

    const actions = [
        {
            icon: BeakerIcon,
            name: "Analyse",
        },
        {
            icon: ShareIcon,
            name: "Share",
        },
        {
            icon: TrashIcon,
            name: "Delete",
        },
    ];

    return (
        <div className="font-regular text-medium leading-medium absolute w-full min-h-full text-black font-sans bg-white">
            <Head>
                <title>{title}</title>
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            </Head>
            <div className="mx-auto max-w-md">
                <div className="flex flex-col mx-4 my-8 space-y-4">
                    <Navigation title={title} />

                    <div className="grid gap-2 grid-cols-2">
                        {attributes.map((attribute) => Attribute({ variant: "dark", ...attribute }))}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h1 className="text-large font-bold">Tests</h1>
                        {tests.map(Test)}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h1 className="text-large font-bold">Actions</h1>
                        {actions.map((action) => Action(action))}
                    </div>
                </div>
            </div>
        </div>
    );
}
