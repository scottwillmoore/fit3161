import { css } from "emotion";

import Container from "app/components/container";
import Card, { CardSection } from "app/components/card";
import Stack from "app/components/stack";

const cardTitleCss = css`
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 800;
`;

const cardLabelCss = css`
    margin-bottom: 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
`;

const cardDataCss = css`
    font-size: 1rem;
    font-weight: 800;
`;

export default function Index() {
    return (
        <Container title="Index">
            <Card>
                <Card.Section>
                    <Stack direction="column">
                        <h1 css={cardTitleCss}>
                            Westmead Post-Traumatic Amnesia Scale
                        </h1>
                        <Stack direction="row" justifyContent="spaceBetween">
                            <Stack direction="column">
                                <h2 css={cardLabelCss}>Patient</h2>
                                <p css={cardDataCss}>B7A42M5Z</p>
                            </Stack>
                            <Stack direction="column">
                                <h2 css={cardLabelCss}>Question</h2>
                                <p css={cardDataCss}>1 of 7</p>
                            </Stack>
                        </Stack>
                    </Stack>
                </Card.Section>
            </Card>

            <Card>
                <CardSection>
                    <Stack direction="row" alignItems="center">
                        <p>I</p>
                        <p>
                            When the patient struggles to form an answer, you
                            may prompt them with three choices selected at
                            random sorted in consecutive order.
                        </p>
                    </Stack>
                </CardSection>
                <CardSection>
                    <h1 css={cardLabelCss}>Observe the patient on their</h1>
                    <h1>
                        Short attention span, easy distractibility, inability to
                        concentrate.
                    </h1>
                </CardSection>
                <CardSection></CardSection>
            </Card>
        </Container>
    );
}
