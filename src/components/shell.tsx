import { css, useTheme } from "emotion";

import { HasChildren, row, column } from "app/utilities";

import { ChevronLeft, KebabHorizontal } from "app/icons";

export interface ShellProps extends HasChildren {
    title: string;
}

export default function Shell({ title, children }: ShellProps) {
    const { color, space } = useTheme();

    return (
        <div
            css={[
                column(),
                css`
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: ${color.whiteBlue};
                `,
            ]}
        >
            <header
                css={css`
                    background-color: white;
                    border-bottom-color: ${color.softPurple};
                    border-bottom-width: ${space[1]};
                `}
            >
                <nav
                    css={[
                        row({ alignItems: "center", justifyContent: "spaceBetween" }),
                        css`
                            margin-left: auto;
                            margin-right: auto;
                            margin-top: ${space[24]};
                            margin-bottom: ${space[24]};
                            max-width: ${space[1024]};
                        `,
                    ]}
                >
                    <button
                        css={css`
                            &:focus {
                                outline: none;
                                border-radius: ${space[4]};
                                box-shadow: 0 0 0 ${space[2]} ${color.softBlue};
                            }
                        `}
                    >
                        <ChevronLeft height="24" />
                    </button>

                    <h1
                        css={css`
                            font-size: 1.25rem;
                            font-weight: 700;
                        `}
                    >
                        {title}
                    </h1>

                    <button
                        css={css`
                            &:focus {
                                outline: none;
                                border-radius: ${space[4]};
                                box-shadow: 0 0 0 ${space[2]} ${color.softBlue};
                            }
                        `}
                    >
                        <KebabHorizontal height="24" />
                    </button>
                </nav>
            </header>

            <main
                css={css`
                    margin-left: auto;
                    margin-right: auto;
                    padding: ${space[32]};
                    max-width: ${space[1024]};
                `}
            >
                {children}
            </main>
        </div>
    );
}
