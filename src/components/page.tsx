import Head from "next/head";

import { Children } from "app/utilities";

import Container from "app/components/container";
import Header, { HeaderProperties } from "app/components/header";

export interface PageProperties extends Children, HeaderProperties {}

export default function Page({ title, children, ...properties }: PageProperties) {
    return (
        <div className="text-black font-base leading-base bg-gray-xlight">
            <Head>
                <title>{title}</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,500;0,800;1,500;1,800&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Header title={title} {...properties} />

            <Container className="py-4 space-y-4">{children}</Container>
        </div>
    );
}
