import { css, useTheme } from "emotion";

import { Shell } from "app/components";
import { Clippy, ArrowUpRight, Clock } from "app/icons";
import { row, column } from "app/utilities";

export default function Index() {
    const { color, space } = useTheme();

    return (
        <Shell title="Index">
            <p
                css={css`
                    display: block;
                    width: 100%;
                    color: red;
                `}
            >
                Hello, world!
            </p>

            <button
                css={[
                    column(),
                    css`
                        text-align: left;
                        color: ${color.blackBlue};
                        background-color: ${color.white};
                        border-color: ${color.softBlue};
                        border-radius: ${space[4]};
                        transition-property: all;
                        transition-duration: 150ms;
                        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

                        &:focus {
                            outline: none;
                            box-shadow: 0 0 0 ${space[4]} ${color.softBlue};
                        }

                        &:hover {
                            outline: none;
                            box-shadow: 0 0 0 ${space[4]} ${color.softBlue};
                        }

                        & > * {
                            position: relative;
                            padding: ${space[16]};
                            border-width: ${space[1]};
                            border-color: ${color.softPurple};
                        }

                        & > * + * {
                            margin-top: -${space[1]};
                        }

                        & > *:first-child {
                            border-top-left-radius: ${space[4]};
                            border-top-right-radius: ${space[4]};
                        }

                        & > *:last-child {
                            border-bottom-left-radius: ${space[4]};
                            border-bottom-right-radius: ${space[4]};
                        }
                    `,
                ]}
            >
                <div css={column({ gap: space[16] })}>
                    <div css={[row({ justifyContent: "spaceBetween" })]}>
                        <div
                            css={css`
                                display: flex;
                                padding: ${space[8]};
                                border-radius: ${space[4]};
                                color: ${color.white};
                                background-color: ${color.hardBlue};
                            `}
                        >
                            <Clippy height="16" />
                        </div>
                        <ArrowUpRight height="24" />
                    </div>
                    <div css={column({ gap: space[4] })}>
                        <h1
                            css={css`
                                font-size: ${space[16]};
                                font-weight: 700;
                                color: ${color.blackBlue};
                            `}
                        >
                            Agitated Behaviour Scale
                        </h1>
                        <p
                            css={css`
                                font-size: ${space[12]};
                                font-weight: 400;
                                color: ${color.grayBlue};
                            `}
                        >
                            The Agitated Behaviour Scale (ABS) measures behavioral aspects of
                            agitation during the acute phase of recovery from acquired brain injury
                            including aspects of aggression, disinhibition, and lability.
                        </p>
                    </div>
                </div>
                <div
                    css={[
                        row({ alignItems: "center", gap: space[16] }),
                        css`
                            background-color: ${color.whiteBlue};
                        `,
                    ]}
                >
                    <div
                        css={css`
                            display: flex;
                            padding: ${space[8]};
                            border-radius: ${space[4]};
                            color: ${color.grayBlue};
                        `}
                    >
                        <Clock height="16" />
                    </div>
                    <div css={column({ gap: space[4] })}>
                        <h2
                            css={css`
                                font-size: ${space[12]};
                                font-weight: 400;
                                color: ${color.grayBlue};
                            `}
                        >
                            Last Administered
                        </h2>
                        <p
                            css={css`
                                font-size: ${space[12]};
                                font-weight: 700;
                                color: ${color.grayBlue};
                            `}
                        >
                            11th December '20
                        </p>
                    </div>
                </div>
            </button>
        </Shell>
    );
}
