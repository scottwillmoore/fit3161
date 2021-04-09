import { SVGProps } from "react";

export type TriangleLeftHeight = "16" | "24";

export interface TriangleLeftProps extends SVGProps<SVGSVGElement> {
    height: TriangleLeftHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path d="M9.573 4.427L6.177 7.823a.25.25 0 000 .354l3.396 3.396a.25.25 0 00.427-.177V4.604a.25.25 0 00-.427-.177z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path d="M8.854 11.646l5.792-5.792a.5.5 0 01.854.353v11.586a.5.5 0 01-.854.353l-5.792-5.792a.5.5 0 010-.708z"></path>',
    },
};

export default function TriangleLeft({ height, ...props }: TriangleLeftProps) {
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
