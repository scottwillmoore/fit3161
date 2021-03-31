import { PropsWithChildren } from "react";
import { css } from "emotion";

const buttonCss = css`
    background: #000;
    border: 1px solid #000;
`;

export type ButtonProps = {};

export default function Button({ children }: PropsWithChildren<ButtonProps>) {
    return <button css={buttonCss}>{children}</button>;
}
