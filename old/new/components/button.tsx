import { Children, ClassName } from "app/utilities";

export interface ButtonProperties extends Children, ClassName {}

export default function Button({ children, className }: ButtonProperties) {
    return <button className="bg-blue-base flex p-2 w-full text-white">{children}</button>;
}
