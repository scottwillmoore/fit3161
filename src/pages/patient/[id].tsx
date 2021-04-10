import { useRouter } from "next/router";

import Shell from "app/components/shell";

import ArrowUpRight from "app/icons/arrow-up-right";
import Beaker from "app/icons/beaker";
import Clipboard from "app/icons/clippy";
import Share from "app/icons/share";
import Trash from "app/icons/trash";

import { Children } from "app/utilities";

interface CardProps extends Children {}

function Card({ children }: CardProps) {
    const baseClasses = [
        "flex",
        "flex-col",
        "space-y-16",
        "p-16",
        "text-left",
        "text-purple-black",
        "bg-white",
        "border",
        "border-purple-soft",
        "rounded",
        "shadow",
        "transition-all",
        "focus:outline-none",
        "focus:ring",
        "hover:shadow-glow",
    ].join(" ");
    return <button className={`${baseClasses}`}>{children}</button>;
}

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "dangerous";
    label: string;
    icon: any;
}

function Button({ variant, label, icon: Icon }: ButtonProps) {
    const baseClasses = [
        "flex",
        "flex-row",
        "items-center",
        "px-16",
        "py-12",
        "rounded",
        "shadow",
        "text-medium",
        "transition-all",
        "focus:outline-none",
        "focus:ring",
    ].join(" ");

    const classes = {
        primary: "text-white border-none bg-purple-hard",
        secondary: "text-purple-gray border border-purple-soft bg-white",
        dangerous: "text-red-hard border border-red-hard bg-white",
    }[variant];

    return (
        <button className={`${baseClasses} ${classes}`}>
            <Icon height="16" className="mr-16" />
            <span>{label}</span>
        </button>
    );
}

interface IconProps {
    size: "small" | "large";
    icon: any;
}

function Icon({ size, icon: Icon }: IconProps) {
    const height = {
        small: "16",
        large: "24",
    }[size];
    return <Icon height={height} />;
}

interface BadgeProps {
    size: "small" | "large";
    icon: any;
}

function Badge({ size, icon: Icon }: BadgeProps) {
    const height = {
        small: "16",
        large: "24",
    }[size];

    return (
        <div className="p-8 text-white bg-purple-hard rounded">
            <Icon height={height} />
        </div>
    );
}

export default function Patient() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Shell title="Patient">
            <div className="flex flex-col space-y-32">
                <div className="grid gap-y-16 grid-cols-2">
                    <div className="col-span-2 space-y-2">
                        <p className="text-purple-gray text-small">Identity</p>
                        <p className="text-medium font-bold">{id}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-purple-gray text-small">Created</p>
                        <p className="text-medium font-bold">11th December ‘20</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-purple-gray text-small">Last Viewed</p>
                        <p className="text-medium font-bold">5th Feburary ‘21</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-16">
                    <h1 className="text-large font-bold">Tests</h1>

                    <Card>
                        <div className="flex flex-row items-start justify-between">
                            <Badge size="small" icon={Clipboard} />
                            <Icon size="large" icon={ArrowUpRight} />
                            {/* <ArrowUpRight height="24" className="text-purple-gray" /> */}
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-large font-bold">Agitated Behaviour Scale</h1>
                            <p className="text-purple-gray text-small">
                                The Agitated Behaviour Scale (ABS) measures behavioral aspects of agitation during the
                                acute phase of recovery from acquired brain injury including aspects of aggression,
                                disinhibition, and lability.
                            </p>
                        </div>

                        <div className="-m-16 pt-16 px-16 text-purple-gray bg-purple-white border-t border-purple-soft">
                            <p className="text-small">Last Administered</p>
                            <p className="text-medium font-bold">11th December '20</p>
                        </div>
                    </Card>

                    <button className="space-y hover:shadow-glow p-16 text-left bg-white border border-purple-soft rounded focus:outline-none shadow space-y-16 transition-all focus:ring">
                        <div className="flex flex-row items-start justify-between">
                            <div className="p-8 text-white bg-purple-hard rounded">
                                <Clipboard height="16" />
                            </div>
                            <ArrowUpRight height="24" className="text-purple-gray" />
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-large font-bold">Agitated Behaviour Scale</h1>
                            <p className="text-purple-gray text-small">
                                The Agitated Behaviour Scale (ABS) measures behavioral aspects of agitation during the
                                acute phase of recovery from acquired brain injury including aspects of aggression,
                                disinhibition, and lability.
                            </p>
                        </div>

                        <div className="-m-16 pt-16 px-16 text-purple-gray bg-purple-white border-t border-purple-soft">
                            <p className="text-small">Last Administered</p>
                            <p className="text-medium font-bold">11th December '20</p>
                        </div>
                    </button>

                    <button className="text-left bg-white border border-purple-soft rounded shadow space-y-16">
                        <div className="flex flex-row items-start justify-between m-16">
                            <div className="p-8 text-white bg-purple-hard rounded">
                                <Clipboard height="16" />
                            </div>
                            <ArrowUpRight height="24" className="text-purple-gray" />
                        </div>

                        <div className="m-16 space-y-2">
                            <h1 className="text-large font-bold">Westmead Post-Traumatic Amnesia Scale</h1>
                            <p className="text-purple-gray text-small">
                                The Westmead Post-traumatic Amnesia Scale (WPTAS) measures the duration and severity of
                                post-traumatic amnesia aquired from brain injury.
                            </p>
                        </div>

                        <div className="px-16 py-8 text-purple-gray bg-purple-white border-t border-purple-soft">
                            <p className="text-small">Last Administered</p>
                            <p className="text-medium font-bold">18th January '21</p>
                        </div>
                    </button>
                </div>

                <div className="flex flex-col space-y-16">
                    <h1 className="text-large font-bold">Actions</h1>

                    <button className="p-16 text-left bg-white border border-purple-soft rounded shadow space-y-16">
                        <div className="flex flex-row items-start justify-between">
                            <div className="p-8 text-white bg-purple-hard rounded">
                                <Beaker height="16" />
                            </div>
                            <ArrowUpRight height="24" className="text-purple-gray" />
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-large font-bold">Analysis</h1>
                            <p className="text-purple-gray text-small">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque orci vitae ut urna,
                                volutpat.
                            </p>
                        </div>
                    </button>

                    <div className="flex flex-row space-x-16">
                        <Button variant="secondary" label="Export" icon={Share} />
                        <Button variant="dangerous" label="Delete" icon={Trash} />
                    </div>
                </div>
            </div>
        </Shell>
    );
}
