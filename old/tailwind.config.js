module.exports = {
    darkMode: false,
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        borderColor: (theme) => ({
            ...theme("colors"),
        }),
        borderRadius: {
            DEFAULT: "0.25rem",
            none: "0rem",
            full: "256rem",
        },
        borderWidth: (theme) => ({
            DEFAULT: "0.0625rem",
            none: "0rem",
            ...theme("spacing"),
        }),
        boxShadow: {
            DEFAULT: "0 0.0625rem 0.1875rem 0 rgba(31, 31, 51, 0.08), 0 0.0625rem 0.125rem 0 rgba(31, 31, 51, 0.04)",
            none: "none",
            glow: "0 0 0.5rem 0.125rem rgba(115, 115, 229, 0.25)",
        },
        colors: {
            black: "#000000",
            white: "#ffffff",

            blue: {
                hard: "#6699ff",
                medium: "#99bbff",
                soft: "#e5eeff",
            },
            green: {
                hard: "",
                medium: "",
                soft: "",
            },
            purple: {
                black: "#1f1f33",
                gray: "#666680",
                white: "#fafaff",

                hard: "#7a7af2",
                medium: "#aaaaf2",
                soft: "#dadaf2",
            },
            orange: {
                hard: "",
                medium: "",
                soft: "",
            },
            red: {
                hard: "#b25959",
                medium: "#ffb2b2",
                soft: "#ffe5e5",
            },
            yellow: {
                hard: "",
                medium: "",
                soft: "",
            },
        },
        fontFamily: {
            sans: [
                '"Inter"',
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                '"Noto Sans"',
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            mono: [
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                '"Liberation Mono"',
                '"Courier New"',
                "monospace",
            ],
        },
        fontSize: {
            tiny: "0.625rem",
            small: "0.75rem",
            medium: "0.875rem",
            large: "1rem",
            huge: "1.25rem",
        },
        fontWeight: {
            regular: "400",
            bold: "800",
        },
        letterSpacing: {
            none: "0",
        },
        lineHeight: {
            none: "1",
            tight: "1.1",
            medium: "1.3",
            loose: "1.5",
        },
        maxHeight: (theme) => ({
            none: "none",
            full: "100%",
            screen: "100vh",
            ...theme("spacing"),
        }),
        maxWidth: (theme) => ({
            none: "none",
            full: "100%",
            screen: "100vw",
            ...theme("screens"),
            ...theme("spacing"),
        }),
        opacity: {
            0: "0",
            25: "0.25",
            50: "0.5",
            75: "0.75",
            100: "1",
        },
        ringColor: (theme) => ({
            DEFAULT: theme("colors.blue.hard"),
            ...theme("colors"),
        }),
        ringOffsetWidth: (theme) => ({
            DEFAULT: "0rem",
            ...theme("spacing"),
        }),
        ringWidth: (theme) => ({
            DEFAULT: "0.25rem",
            ...theme("spacing"),
        }),
        screens: {
            small: "640px",
            medium: "768px",
            large: "1024px",
        },
        spacing: {
            0: "0rem",
            2: "0.25rem",
            4: "0.25rem",
            8: "0.5rem",
            12: "0.75rem",
            16: "1rem",
            20: "1.25rem",
            24: "1.5rem",
            32: "2rem",
            48: "3rem",
            64: "4rem",
            96: "6rem",
            128: "8rem",
            256: "16rem",
        },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
            borderWidth: ["checked"],
        },
    },
};