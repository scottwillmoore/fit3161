import { PropsWithChildren } from "react";
import { css } from "emotion";

export interface HasChildren extends PropsWithChildren<{}> {}

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

export type Flex = {
    direction?: Direction;
    wrap?: Wrap;
    alignContent?: AlignContent;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    gap?: string;
};

export const flex = ({
    direction = "row",
    wrap = "noWrap",
    alignContent = "stretch",
    justifyContent = "start",
    alignItems = "stretch",
    gap = "0",
}: Flex) => css`
    display: flex;
    flex-direction: ${directionMap[direction]};
    flex-wrap: ${wrapMap[wrap]};
    align-content: ${alignContentMap[alignContent]};
    justify-content: ${justifyContentMap[justifyContent]};
    align-items: ${alignItemsMap[alignItems]};

    & > * + * {
        ${direction.includes("row") ? `margin-left: ${gap};` : `margin-top: ${gap};`}
    }
`;

export const row = (properties?: Omit<Flex, "direction">) =>
    flex({ direction: "row", wrap: "noWrap", ...properties });

export const column = (properties?: Omit<Flex, "direction">) =>
    flex({ direction: "column", wrap: "noWrap", ...properties });
