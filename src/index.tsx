import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "@/components";
import { FirebaseProvider } from "@/utilities";

import "./index.scss";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <FirebaseProvider
                options={{
                    apiKey: "AIzaSyARrdJERMpllNpHFjiHV-AU14zOgrLkZIY",
                    authDomain: "fit3161-67fad.firebaseapp.com",
                    projectId: "fit3161-67fad",
                }}
            >
                <App />
            </FirebaseProvider>
        </BrowserRouter>
    </StrictMode>,
    rootElement
);
