import { PropsWithChildren } from "react";
import { css } from "emotion";

import Icon from "app/components/icon";

const containerCss = css`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const headerCss = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    color: #ffffff;
    background: #175ce5;
`;

const titleCss = css`
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
`;

const mainCss = css`
    flex: 1;
    padding: 2rem;
    background: #fafaff;
`;

export interface ContainerProperties {
    title: string;
}

export default function Container({
    title,
    children,
}: PropsWithChildren<ContainerProperties>) {
    return (
        <div css={containerCss}>
            <header css={headerCss}>
                <button>Left</button>
                <h1 css={titleCss}>{title}</h1>
                <button>Right</button>
            </header>

            <main css={mainCss}>{children}</main>
        </div>
    );
}
