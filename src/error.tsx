import { Component, useState } from "react";

import { ChildrenProps } from "@/utilities";

import classes from "./error.module.scss";

export type ErrorBoundaryProps = ChildrenProps;

export type ErrorBoundaryState = {
    error: Error | undefined;
};

const initialState = {
    error: undefined,
};

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    state = initialState;

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    render() {
        if (!this.state.error) {
            return this.props.children;
        }
        return <p>Error!</p>;
    }
}
