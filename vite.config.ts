import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

import { resolve } from "path";

export default defineConfig({
    build: {
        outDir: "build",
    },
    esbuild: {
        jsxInject: `import React from "react"`,
    },
    plugins: [reactRefresh()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: "/src",
            },
        ],
    },
});
