import Head from "next/head";

import { ArrowRightIcon, ArrowLeftIcon, BeakerIcon, UserIcon } from "hero/outline";

import { Attribute, Test, Navigation, Action } from "./patient";

export function Question() {}

export default function Page() {
    const title = "Test";

    const attributes = [
        {
            icon: UserIcon,
            name: `Identified by`,
            value: `B7A4-2M5Z`,
        },
    ];
    return (
        <div className="absolute w-full min-h-full text-black font-sans text-medium font-regular leading-medium bg-white">
            <Head>
                <title>{title}</title>
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            </Head>
            <div className="max-w-md mx-auto">
                <div className="flex flex-col m-4 space-y-4">
                    <Navigation title={title} />

                    <div className="grid gap-2 grid-cols-2">
                        {attributes.map((attribute) => Attribute({ variant: "dark", ...attribute }))}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h1 className="text-large font-bold">Questions</h1>
                        <div className="space-y-1 flex flex-col p-2 text-white bg-black rounded">
                            <p className="text-small">Please observe the patient on the trait.</p>
                        </div>
                        <div className="space-y-1 flex flex-col p-2 text-white bg-black rounded">
                            <h1 className="text-xlarge font-bold">
                                Short attention span, easy distractibility, inability to concentrate
                            </h1>
                            <p className="text-small">Observe the patient on their</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <Action icon={ArrowRightIcon} name="Submit" />
                    </div>
                </div>
            </div>
        </div>
    );
}
