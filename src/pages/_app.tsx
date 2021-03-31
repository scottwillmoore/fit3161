import { AppProps } from "next/app";

import "app/stylesheet.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
