import classes from "./spinner.module.scss";

export function Spinner() {
    return (
        <div className={classes.container}>
            <div className={classes.spinner}>
                <div className={classes.circle1}></div>
                <div className={classes.circle2}></div>
            </div>
            <p className={classes.text}>Loading...</p>
        </div>
    );
}
