import { Card, CardSection, Frame } from "app/components";

export default function Patient() {
    return (
        <Frame title="Patient">
            <Card>
                <CardSection>
                    <p>Hello</p>
                </CardSection>
                <CardSection variant="secondary">
                    <p>Hello</p>
                </CardSection>
            </Card>
        </Frame>
    );
}
