import { Link } from "react-router-dom";

import classes from "./header.module.scss";

export type Breadcrumb = {
    path: string;
    name: string;
};

export type HeaderProps = {
    title: string;
    breadcrumbs: Breadcrumb[];
};

export function Header({ title, breadcrumbs }: HeaderProps) {
    return (
        <header className={classes.group}>
            {breadcrumbs.length > 1 && (
                <div className={classes.breadcrumb}>
                    {breadcrumbs.map(({ path, name }, key) => (
                        <Link key={key} className={classes.item} to={path}>
                            {name}
                        </Link>
                    ))}
                </div>
            )}
            <h1 className={classes.title}>{title}</h1>
        </header>
    );
}
