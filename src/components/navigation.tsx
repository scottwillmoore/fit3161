import { ChevronLeft, KebabHorizontal } from "@/icons";

import classes from "./navigation.module.scss";

export type NavigationProps = {
    onBack: () => void;
    onMenu: () => void;
};

export function Navigation({ onBack, onMenu }: NavigationProps) {
    return (
        <nav className={classes.navigation}>
            <div className={classes.container}>
                <button className={classes.button} onClick={onBack}>
                    <ChevronLeft height="24" />
                </button>

                <h1 className={classes.title}>
                    Post-Traumatic Amnesia Assessment
                </h1>

                <button className={classes.button} onClick={onMenu}>
                    <KebabHorizontal height="24" />
                </button>
            </div>
        </nav>
    );
}
