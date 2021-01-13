import React from "react";
import ReactDOM from "react-dom";

import App from "@client/App";

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

if (import.meta.hot) {
    import.meta.hot.accept();
}
