export type Theme = typeof lightTheme;

export const lightTheme = {
    color: {
        black: "#000000",
        gray: "#999999",
        white: "#ffffff",
        blackBlue: "#1f2533",
        grayBlue: "#666f80",
        whiteBlue: "#fafcff",
        hardRed: "#b25959",
        mediumRed: "#ffb2b2",
        softRed: "#ffe5e5",
        hardOrange: "#e5b85c",
        mediumOrange: "#ffe5b2",
        softOrange: "#fff6e5",
        hardGreen: "#66ccaa",
        mediumGreen: "#b2ffe6",
        softGreen: "#e5fff7",
        hardBlue: "#6699ff",
        mediumBlue: "#99bbff",
        softBlue: "#e5eeff",
        hardPurple: "#7a7af2",
        mediumPurple: "#aaaaf2",
        softPurple: "#dadaf2",
    },
    space: {
        0: "0rem",
        1: "0.0625rem",
        2: "0.125rem",
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
        512: "32rem",
        1024: "64rem",
    },
};

// Color

// BackgroundColor

// BorderColor
// BorderRadius
// BorderStyle
// BorderWidth

// FontFamily
// FontSize
// FontWeight

// themetype

// <Button />
// <Card />

// TYPED STYLED SYSTEM

function system(system: any) {
    return null;
}

import { Properties as CSSProperties } from "csstype";

type Color = "abc" | "xyz";

export interface ThemeProperties {
    color?: `$${Color}`;
}

export interface Properties
    extends Omit<CSSProperties, keyof ThemeProperties>,
        ThemeProperties {}

const test: Properties = {
    display: "flex",
    color: "$abc",
};

type BorderWidth = {};

type Space = keyof typeof lightTheme.space;

// export type Time = number;

// export type Length = number;

// export type Color = "black" | "white";

// export type Breakpoint = number;

// export interface ColorProperties {
//     color: Color;
//     backgroundColor: Color;
// }

// export interface MarginProperties {
//     margin: Length;
//     marginBottom: Length;
//     marginHorizontal: Length;
//     marginLeft: Length;
//     marginRight: Length;
//     marginTop: Length;
//     marginVertical: Length;
// }
