import classes from "./progress.module.scss";

export type ProgressProps = {
    current: number;
    total: number;
};

export function Progress({ current, total }: ProgressProps) {
    const percentage = (100 * (current - 1)) / total;
    return (
        <div className={classes.container}>
            <span className={classes.description}>
                {current <= total
                    ? `Question ${current} of ${total}`
                    : `Finished`}
            </span>
            <div className={classes.progress}>
                <div
                    className={classes.bar}
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={total + 1}
                    aria-valuenow={current}
                ></div>
            </div>
        </div>
    );
}
