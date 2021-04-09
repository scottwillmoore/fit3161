import { Children, ClassName } from "app/utilities";

export interface ContainerProperties extends Children, ClassName {}

export default function Container({ children, className }: ContainerProperties) {
    return <div className={["px-4 max-w-2xl mx-auto", className].join(" ")}>{children}</div>;
}
