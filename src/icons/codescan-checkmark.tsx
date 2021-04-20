import { SVGProps } from "react";

export type CodescanCheckmarkHeight = "16" | "24";

export interface CodescanCheckmarkProps extends SVGProps<SVGSVGElement> {
    height: CodescanCheckmarkHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path d="M10.28 6.28a.75.75 0 10-1.06-1.06L6.25 8.19l-.97-.97a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.06 0l3.5-3.5z"></path><path fill-rule="evenodd" d="M7.5 15a7.469 7.469 0 004.746-1.693l2.474 2.473a.75.75 0 101.06-1.06l-2.473-2.474A7.5 7.5 0 107.5 15zm0-13.5a6 6 0 104.094 10.386.75.75 0 01.293-.292A6 6 0 007.5 1.5z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path d="M15.03 8.28a.75.75 0 00-1.06-1.06l-5.22 5.22-2.22-2.22a.75.75 0 10-1.06 1.06l2.75 2.75a.75.75 0 001.06 0l5.75-5.75z"></path><path fill-rule="evenodd" d="M0 10.5C0 4.701 4.701 0 10.5 0S21 4.701 21 10.5c0 2.63-.967 5.033-2.564 6.875l4.344 4.345a.75.75 0 11-1.06 1.06l-4.345-4.344A10.459 10.459 0 0110.5 21C4.701 21 0 16.299 0 10.5zm10.5-9a9 9 0 100 18 9 9 0 000-18z"></path>',
    },
};

export default function CodescanCheckmark({
    height,
    ...props
}: CodescanCheckmarkProps) {
    const { width, path } = heightMap[height];
    const viewBox = `0 0 ${width} ${height}`;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={viewBox}
            fill="currentColor"
            stroke="none"
            dangerouslySetInnerHTML={{ __html: path }}
            {...props}
        />
    );
}
