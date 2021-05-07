import { Component, useState } from "react";

import { Sync } from "@/icons";
import { Button, ButtonGroup } from "@/components";
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

    handleReset() {
        window.location.replace("/");
    }

    render() {
        if (!this.state.error) {
            return this.props.children;
        }

        return (
            <div className={classes.error}>
                <p className={classes.message}>{this.state.error}</p>
                <ButtonGroup>
                    <Button
                        icon={Sync}
                        text="Reset"
                        onClick={this.handleReset.bind(this)}
                    />
                </ButtonGroup>
            </div>
        );
    }
}
