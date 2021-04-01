import { Children, ClassName } from "app/utilities";

export interface ButtonProperties extends Children, ClassName {}

export default function Button({ children, className }: ButtonProperties) {
    return <button className="flex p-2 w-full text-white bg-blue-base">{children}</button>;
}
