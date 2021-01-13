module.exports = {
    mount: {
        public: {
            url: "/",
            static: true,
        },
        src: {
            url: "/build",
        },
    },
    plugins: ["@snowpack/plugin-typescript", "@snowpack/plugin-react-refresh"],
};
