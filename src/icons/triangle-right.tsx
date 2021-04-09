import { SVGProps } from "react";

export type TriangleRightHeight = "16" | "24";

export interface TriangleRightProps extends SVGProps<SVGSVGElement> {
    height: TriangleRightHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path d="M6.427 4.427l3.396 3.396a.25.25 0 010 .354l-3.396 3.396A.25.25 0 016 11.396V4.604a.25.25 0 01.427-.177z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path d="M15.146 12.354l-5.792 5.792a.5.5 0 01-.854-.353V6.207a.5.5 0 01.854-.353l5.792 5.792a.5.5 0 010 .708z"></path>',
    },
};

export default function TriangleRight({ height, ...props }: TriangleRightProps) {
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
