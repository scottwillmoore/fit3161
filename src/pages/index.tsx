import { Card, Frame } from "app/components";
import { Clippy, ArrowUpRight, Clock } from "app/icons";

export default function Index() {
    return (
        <Frame title="Index">
            <Card>
                <p>Hello, world!</p>
            </Card>
        </Frame>
    );
    {
        /* 
        <Shell title="Index">
            <h1>Tests</h1>

            <Card as="button">
                <Column gap={space[16]}>
                    <Row justify="spaceBetween" gap={space[16]}>
                        <div
                            css={css`
                                padding: ${space[8]};
                                border-radius: ${space[4]};
                                color: ${color.white};
                                background-color: ${color.hardBlue};
                            `}
                        >
                            <Clippy height="16" />
                        </div>
                        <ArrowUpRight height="24" />
                    </Row>
                    <Column gap={space[16]}>
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
                    </Column>
                </Column>

                <Row align="center" gap={space[16]}>
                    <div
                        css={css`
                            padding: ${space[8]};
                            border-radius: ${space[4]};
                            color: ${color.grayBlue};
                        `}
                    >
                        <Clock height="16" />
                    </div>
                    <Column>
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
                    </Column>
                </Row>
            </Card>
        </Shell>
         */
    }
}
