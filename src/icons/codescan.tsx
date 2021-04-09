import { SVGProps } from "react";

export type CodescanHeight = "16" | "24";

export interface CodescanProps extends SVGProps<SVGSVGElement> {
    height: CodescanHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path d="M8.47 4.97a.75.75 0 000 1.06L9.94 7.5 8.47 8.97a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM6.53 6.03a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06L5.06 7.5l1.47-1.47z"></path><path fill-rule="evenodd" d="M12.246 13.307a7.5 7.5 0 111.06-1.06l2.474 2.473a.75.75 0 11-1.06 1.06l-2.474-2.473zM1.5 7.5a6 6 0 1110.386 4.094.75.75 0 00-.292.293A6 6 0 011.5 7.5z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path d="M11.97 6.97a.75.75 0 000 1.06l2.47 2.47-2.47 2.47a.75.75 0 101.06 1.06l3-3a.75.75 0 000-1.06l-3-3a.75.75 0 00-1.06 0zM9.03 8.03a.75.75 0 00-1.06-1.06l-3 3a.75.75 0 000 1.06l3 3a.75.75 0 001.06-1.06L6.56 10.5l2.47-2.47z"></path><path fill-rule="evenodd" d="M10.5 0C4.701 0 0 4.701 0 10.5S4.701 21 10.5 21c2.63 0 5.033-.967 6.875-2.564l4.345 4.344a.75.75 0 101.06-1.06l-4.344-4.345A10.459 10.459 0 0021 10.5C21 4.701 16.299 0 10.5 0zm-9 10.5a9 9 0 1118 0 9 9 0 01-18 0z"></path>',
    },
};

export default function Codescan({ height, ...props }: CodescanProps) {
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
