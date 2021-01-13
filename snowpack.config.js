module.exports = {
    alias: {
        "@client": "./src/client",
        "@common": "./src/common",
        "@server": "./src/server",
    },
    buildOptions: {
        metaUrlPath: "modules",
        sourcemap: true,
    },
    mount: {
        "public": {
            url: "/",
            static: true,
        },
        "src/client": {
            url: "/",
        },
    },
    plugins: [
        "@snowpack/plugin-postcss",
        "@snowpack/plugin-react-refresh",
        "@snowpack/plugin-typescript",
    ],
};
