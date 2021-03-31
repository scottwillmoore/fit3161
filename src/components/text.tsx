import { PropsWithChildren } from "react";
import { css } from "emotion";

const textSizes = {
    small: "0.75rem",
    medium: "1rem",
    large: "1.25rem",
};

export type TextSize = keyof typeof textSizes;

const textColors = {
    dark: "",
    light: "",
};

export type TextColor = keyof typeof textColors;

export type TextProperties = {
    size: TextSize;
    color: TextColor;
};

export default function Text({
    size,
    color,
}: PropsWithChildren<TextProperties>) {
    const textCss = css`
        font-size: ${textSizes[size]};
        color: ${textColors[color]};
    `;
    return <p css={textCss}></p>;
}
