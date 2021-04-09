import Head from "next/head";

import ChevronLeft from "app/icons/chevron-left";
import KebabHorizontal from "app/icons/kebab-horizontal";

import { Children } from "app/utilities";

export interface ShellProps extends Children {
    title: string;
}

export default function Shell({ title, children }: ShellProps) {
    return (
        <div className="absolute w-full min-h-full text-purple-black font-sans text-medium font-regular leading-medium bg-purple-white">
            <Head>
                <title>{title}</title>
            </Head>

            <header className="bg-white border-b border-purple-soft">
                <nav className="flex flex-row items-center justify-between mx-auto pb-16 pt-24 px-32 max-w-small">
                    <button className="text-left focus:outline-none focus:ring hover:ring">
                        <ChevronLeft height="24" />
                    </button>
                    <h1 className="text-huge font-bold">{title}</h1>
                    <button className="text-left focus:outline-none focus:ring hover:ring">
                        <KebabHorizontal height="24" />
                    </button>
                </nav>
            </header>

            <main className="mx-auto p-32 max-w-small">{children}</main>
        </div>
    );
}
