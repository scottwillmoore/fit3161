const { join } = require("path");

module.exports = {
    distDir: "build",
    poweredByHeader: false,
    sassOptions: {
        includePaths: [join(__dirname, "src/styles")],
    },
};
