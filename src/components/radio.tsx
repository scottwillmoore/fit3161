import { Card, CardSection } from "@/components/card";
import { ChildrenProps } from "@/utilities";

import classes from "./radio.module.scss";

export type RadioProps = {
    name: string;
    title: string;
    description: string;
};

export function Radio({ name, title, description }: RadioProps) {
    return (
        <label className={classes.label}>
            <input
                className={classes.input}
                type="radio"
                name={name}
                // onChange={(event) => console.log(event)}
            />
            <Card className={classes.card}>
                <CardSection className={classes.cardSection}>
                    <div className={classes.radio}></div>
                    <div className={classes.information}>
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
    return (
        <div
            className={classes.radioGroup}
            onChange={(event) => console.log(event)}
        >
            {children}
        </div>
    );
}
