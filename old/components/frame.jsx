import { Fragment } from "react";

import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ClipboardIcon,
    ClockIcon,
    DotsHorizontalIcon,
    EyeIcon,
    QrcodeIcon,
} from "hero/outline";

function Box({ children, className }) {
    return <div className={["p-1 text-white bg-black rounded-xl", className].join(" ")}>{children}</div>;
}

function Property({ icon: Icon, name, value }) {
    return (
        <div className="space-x-1 flex flex-row items-center justify-start">
            <Box>
                <Icon className="w-3 h-3" />
            </Box>
            <div className="flex flex-col items-start justify-start">
                <p className="leading-base text-small">{name}</p>
                <p className="leading-base text-small font-bold">{value}</p>
            </div>
        </div>
    );
}

export default function Frame() {
    return (
        <Fragment>
            <div className="frame space-y-6">
                <div className="flex flex-row items-center justify-between space-x-4">
                    <Box>
                        <ChevronLeftIcon className="w-3 h-3" />
                    </Box>
                    <h1 className="text-xxlarge text-black font-bold">Patient</h1>
                    <Box>
                        <DotsHorizontalIcon className="w-3 h-3" />
                    </Box>
                </div>
                <header className="grid gap-2 grid-cols-2">
                    <Property icon={QrcodeIcon} name="Identity" value="B7A4-2M5Z" />
                    <Property icon={ClipboardIcon} name="Test Count" value="22" />
                    <Property icon={ClockIcon} name="Created" value="3rd October ‘20" />
                    <Property icon={EyeIcon} name="Last Viewed" value="2nd Feburary ‘21" />
                </header>

                <Box>
                    <div className="p-1 flex flex-row items-center justify-between space-x-2">
                        <ClipboardIcon className="w-3 h-3" />
                        <div className="flex flex-col flex-grow">
                            <p className="text-base font-bold">Agitated Behaviour Scale</p>
                            <p className="text-small">Last adminstered on 1st January ‘21</p>
                        </div>
                        <ChevronRightIcon className="w-3 h-3" />
                    </div>
                </Box>

                <Box>
                    <div className="p-1 flex flex-row items-center justify-between space-x-2">
                        <ClipboardIcon className="w-3 h-3" />
                        <div className="flex flex-col flex-grow">
                            <p className="text-base font-bold">Westmead Post-Traumatic Amnesia Scale</p>
                            <p className="text-small">Last adminstered on 15th January ‘21</p>
                        </div>
                        <ChevronRightIcon className="w-3 h-3" />
                    </div>
                </Box>
            </div>

            <style jsx>
                {`
                    .frame {
                        max-width: 40rem;
                        margin: 0 auto;
                        padding: 2rem;
                        font-family: "Inter", sans-serif;
                        font-weight: 400;
                    }
                `}
            </style>
        </Fragment>
    );
}
