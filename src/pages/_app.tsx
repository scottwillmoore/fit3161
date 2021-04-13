import { AppProps } from "next/app";
import { ThemeProvider } from "emotion";

import { lightTheme } from "app/themes";

import "app/styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={lightTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
