import Head from "next/head";

export default function Layout({ title, description, children }) {
    return (
        <div className="app">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {title && <title>{title}</title>}
                {description && <meta name="description" content={description} />}
            </Head>

            {children}
        </div>
    );
}
