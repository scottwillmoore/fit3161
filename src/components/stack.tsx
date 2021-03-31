import { PropsWithChildren, ReactHTML } from "react";
import { jsx, css } from "emotion";

export type Element = keyof ReactHTML;

const directionMap = {
    row: "row",
    rowReverse: "row-reverse",
    column: "column",
    columnReverse: "column-reverse",
};

export type Direction = keyof typeof directionMap;

const wrapMap = {
    noWrap: "nowrap",
    wrap: "wrap",
    wrapReverse: "wrap-reverse",
};

export type Wrap = keyof typeof wrapMap;

const alignContentMap = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    spaceBetween: "space-between",
    spaceAround: "space-around",
    stretch: "stretch",
};

export type AlignContent = keyof typeof alignContentMap;

const justifyContentMap = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    spaceBetween: "space-between",
    spaceAround: "space-around",
};

export type JustifyContent = keyof typeof justifyContentMap;

const alignItemsMap = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline",
    stretch: "stretch",
};

export type AlignItems = keyof typeof alignItemsMap;

export type StackProperties = {
    element?: Element;
    direction?: Direction;
    wrap?: Wrap;
    alignContent?: AlignContent;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
};

export default function Stack({
    element = "div",
    direction = "row",
    wrap = "noWrap",
    alignContent = "start",
    justifyContent = "start",
    alignItems = "start",
    children,
}: PropsWithChildren<StackProperties>) {
    const stackCss = css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: ${directionMap[direction]};
        flex-wrap: ${wrapMap[wrap]};
        align-content: ${alignContentMap[alignContent]};
        justify-content: ${justifyContentMap[justifyContent]};
        align-items: ${alignItemsMap[alignItems]};
    `;

    return jsx(element, { css: stackCss }, children);
}

export type Basis = "auto" | "content" | string;

export type StackItemProperties = {
    element?: Element;
    grow?: number;
    shrink?: number;
    basis?: Basis;
};

export function StackItem({
    element = "div",
    grow = 0,
    shrink = 1,
    basis = "auto",
    children,
}: PropsWithChildren<StackItemProperties>) {
    const stackItemCss = css`
        flex-grow: ${grow};
        flex-shrink: ${shrink};
        flex-basis: ${basis};
    `;

    return jsx(element, { css: stackItemCss }, children);
}

Stack.Item = StackItem;
