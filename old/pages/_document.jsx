import Document, { Html, Head, Main, NextScript } from "next/document";

function Body({ children }) {
    return <body>{children}</body>;
}

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <Body>
                    <Main />
                    <NextScript />
                </Body>
            </Html>
        );
    }
}
