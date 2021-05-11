import { Card, CardSection } from "@/components/card";
import { AsProps, ChildrenProps } from "@/utilities";

import classes from "./radio.module.scss";

export type RadioProps = {
    title: string;
    description: string;
} & AsProps<"input">;

export function Radio({ title, description, ...props }: RadioProps) {
    return (
        <label className={classes.label}>
            <input className={classes.input} type="radio" {...props} />
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
    return <div className={classes.radioGroup}>{children}</div>;
}
