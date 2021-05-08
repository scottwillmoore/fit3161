import { DependencyList, useCallback, useEffect, useState } from "react";

export type State = "idle" | "load" | "success" | "error";

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

export function usePromise<T>(promise: Promise<T>): Result<T> {
    const [state, setState] = useState<State>("idle");
    const [value, setValue] = useState<T>({} as T);
    const [error, setError] = useState<any>();

    const run = useCallback(async () => {
        setState("load");
        try {
            const value = await promise;
            setValue(value);
            setState("success");
        } catch (error) {
            setError(error);
            setState("error");
        }
    }, [promise]);

    useEffect(() => {
        run();
    }, [run]);

    return { state, value, error };
}

export function useScrollReset(dependencies: DependencyList) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, dependencies);
}
