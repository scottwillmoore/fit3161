import { DependencyList, useCallback, useEffect, useState } from "react";

export type AsyncState = "idle" | "load" | "success" | "error";

export type Idle = {
    state: "idle";
};

export type Load = {
    state: "load";
};

export type Success<T> = {
    state: "success";
    value: T;
};

export type Error = {
    state: "error";
    error: any;
};

export type Result<T> = Idle | Load | Success<T> | Error;

export function useAsync<T>(
    callback: () => Promise<T>,
    execute = true
): Result<T> {
    const [state, setState] = useState<AsyncState>("idle");
    const [value, setValue] = useState<T>({} as T);
    const [error, setError] = useState<any>();

    const run = useCallback(async () => {
        setState("load");
        try {
            const value = await callback();
            setValue(value);
            setState("success");
        } catch (error) {
            setError(error);
            setState("error");
        }
    }, [callback]);

    useEffect(() => {
        if (execute) {
            run();
        }
    }, [run, execute]);

    return { state, value, error };
}

export function useScrollReset(dependencies: DependencyList) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, dependencies);
}
