import css from "./header.module.css";

export interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <header className={css.header}>
            <h1>{title}</h1>
        </header>
    );
}
