import { Card, CardSection } from "app/components";
import { ChildrenProps } from "app/utilities";

import classes from "./radio.module.scss";

export type RadioProps = {
    name: string;
    title: string;
    description: string;
};

export function Radio({ name, title, description }: RadioProps) {
    return (
        <label className={classes.label}>
            <input className={classes.input} type="radio" name={name} />
            <Card className={classes.card}>
                <CardSection className={classes.cardSection}>
                    <div className={classes.radio}></div>
                    <div className={classes.column}>
                        <span className={classes.title}>{title}</span>
                        <span className={classes.description}>
                            {description}
                        </span>
                    </div>
                </CardSection>
            </Card>
        </label>
    );
}

export type RadioGroupProps = ChildrenProps;

export function RadioGroup({ children }: RadioGroupProps) {
    return <div className={classes.radioGroup}>{children}</div>;
}
