import classes from "./progress.module.scss";

export type ProgressProps = {
    min?: number;
    max?: number;
    value: number;
};

export function Progress({ min = 0, max = 100, value }: ProgressProps) {
    const percentage = (100 * value) / (max - min);
    return (
        <div className={classes.container}>
            {/* <span className={classes.description}>Question 1 of 7</span> */}
            <div className={classes.progress}>
                <div
                    className={classes.bar}
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={value}
                ></div>
            </div>
        </div>
    );
}
