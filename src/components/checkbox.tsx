import { Card, CardSection } from "@/components/card";
import { AsProps, ChildrenProps } from "@/utilities";

import classes from "./checkbox.module.scss";

export type CheckboxProps = {
    img_src: string;
} & AsProps<"input">;

export function Checkbox({ img_src, ...props }: CheckboxProps) {
    return (
        <label className={classes.label}>
            <input className={classes.input} type="checkbox" {...props} />
            <Card className={classes.card}>
                <CardSection className={classes.cardSection}>
                    <img className={classes.image} src={img_src} alt="image" />
                </CardSection>
            </Card>
        </label>
    );
}

export type CheckboxGroupProps = ChildrenProps;

export function CheckboxGroup({ children }: CheckboxGroupProps) {
    return <div className={classes.checkboxGroup}>{children}</div>;
}
