import { Card, CardSection } from "app/components";
import { ChildrenProps } from "app/utilities";

import classes from "./checkbox.module.scss";

export type CheckboxProps = {
    img_src: string;
};

export function Checkbox({ img_src }: CheckboxProps) {
    return (
        <label className={classes.label}>
            <input className={classes.input} type="checkbox"/>
            <Card className={classes.card}>
                <CardSection className={classes.cardSection}>
                    <img src={img_src}/>
                </CardSection>
            </Card>
        </label>
    );
}

export type CheckboxGroupProps = ChildrenProps;

export function CheckboxGroup({ children }: CheckboxGroupProps) {
    return <div className={classes.checkboxGroup}>{children}</div>;
}

