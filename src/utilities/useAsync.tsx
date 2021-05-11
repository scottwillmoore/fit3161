import {
    DependencyList,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

export type Fn<TArgs extends any[], TValue> = (
    ...args: TArgs
) => Promise<TValue>;

export type Idle = {
    type: "idle";
};

export type Load = {
    type: "load";
};

export type Success<TValue> = {
    type: "success";
    value: TValue;
};

export type Error<TError = any> = {
    type: "failure";
    error: TError;
};

export type State<TValue, TError = any> =
    | Idle
    | Load
    | Success<TValue>
    | Error<TError>;

export function useAsyncCallback<TArgs extends any[], TValue, TError = any>(
    fn: Fn<TArgs, TValue>,
    deps: DependencyList = []
): [State<TValue, TError>, Fn<TArgs, TValue>] {
    const lastId = useRef(0);

    const [state, setState] = useState<State<TValue, TError>>({ type: "idle" });

    const callback = useCallback(async (...args: TArgs) => {
        const id = ++lastId.current;
        setState({ type: "load" });
        try {
            const value = await fn(...args);
            if (id == lastId.current) {
                setState({ type: "success", value });
            }
            return value;
        } catch (error) {
            if (id == lastId.current) {
                setState({ type: "failure", error });
            }
            return error;
        }
    }, deps);

    return [state, callback];
}

export function useAsync<TArgs extends any[], TValue, TError = any>(
    fn: Fn<TArgs, TValue>,
    args: TArgs,
    deps: DependencyList = args
) {
    const [state, callback] = useAsyncCallback(fn, deps);

    useEffect(() => {
        callback(...args);
    }, [callback]);

    return state;
}
