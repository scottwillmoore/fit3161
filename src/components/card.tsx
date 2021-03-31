import { PropsWithChildren } from "react";
import { css } from "emotion";

import { lightTheme } from "app/theme";
const theme = lightTheme;

export type CardProperties = {};

export default function Card({ children }: PropsWithChildren<CardProperties>) {
    const cardCss = css`
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        background: ${theme.colors.neutral.extraLight};
        border: 0.0625rem solid ${theme.colors.neutral.light};
        /* box-shadow: 0 0.25rem 1rem ${theme.colors.primary.extraDark}40; */
    `;

    return <div css={cardCss}>{children}</div>;
}

export type CardSectionProperties = {};

export function CardSection({
    children,
}: PropsWithChildren<CardSectionProperties>) {
    const sectionCss = css`
        padding: 1rem;
        &:not(:last-child) {
            border-bottom: 0.0625rem solid ${theme.colors.neutral.light};
        }
    `;

    return <div css={sectionCss}>{children}</div>;
}

Card.Section = CardSection;
