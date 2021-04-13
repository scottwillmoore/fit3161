import { useRouter } from "next/router";

import Shell from "app/components/shell";

import ArrowLeft from "app/icons/arrow-left";
import ArrowRight from "app/icons/arrow-right";

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
        <Shell title="Test">
            <div className="flex flex-col space-y-32">
                <p className="text-purple-gray text-small">Question 1 of 7</p>
                <div className="flex flex-col space-y-8">
                    <h1 className="text-purple-black text-large font-bold">
                        Short attention span, easy distractibility, inability to concentrate.
                    </h1>
                    <p className="text-purple-gray text-small">
                        Select the option which best describes this behaviour of the patient.
                    </p>
                </div>

                <div className="flex flex-col space-y-8">
                    <label className="hover:shadow-glow flex flex-row items-center p-16 text-left bg-white border border-purple-soft rounded focus:outline-none shadow space-x-16 transition-all focus:ring">
                        <input
                            type="radio"
                            name="question"
                            className="rounded-full checked:border-4 flex-shrink-0 w-16 h-16 bg-white border border-purple-gray checked:border-purple-hard outline-none appearance-none transition-all"
                        />
                        <div className="flex flex-col">
                            <span className="text-purple-black text-medium font-bold">Absent</span>
                            <span className="text-purple-gray text-small">The behaviour is not present.</span>
                        </div>
                    </label>

                    <label className="hover:shadow-glow flex flex-row items-center p-16 text-left bg-white border border-purple-soft rounded focus:outline-none shadow space-x-16 transition-all focus:ring">
                        <input
                            type="radio"
                            name="question"
                            className="rounded-full checked:border-4 flex-shrink-0 w-16 h-16 bg-white border border-purple-gray checked:border-purple-hard outline-none appearance-none transition-all"
                        />
                        <div className="flex flex-col">
                            <h1 className="text-purple-black text-medium font-bold">Slight</h1>
                            <p className="text-purple-gray text-small">
                                The behavior is present, but does not prevent the conduct of other, contextually
                                appropriate behavior. The individual may redirect spontaneously, or the continuation of
                                the agitated behavior does not disrupt appropriate behavior.
                            </p>
                        </div>
                    </label>
                </div>

                <div className="flex flex-row justify-between">
                    <Button variant="secondary" label="Previous" icon={ArrowLeft} />
                    <Button variant="primary" label="Next" icon={ArrowRight} />
                </div>
            </div>
        </Shell>
    );
}
