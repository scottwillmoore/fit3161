import classes from "./progress-bar.module.scss";

export type ProgressBarProps = {
    min?: number;
    max?: number;
    value: number;
};

export function ProgressBar({ min = 0, max = 100, value }: ProgressBarProps) {
    const percentage = (100 * value) / (max - min);
    return (
        <div className={classes.container}>
            <p className={classes.description}>Question 1 of 7</p>
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
