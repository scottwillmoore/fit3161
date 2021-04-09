import { SVGProps } from "react";

export type TriangleDownHeight = "16" | "24";

export interface TriangleDownProps extends SVGProps<SVGSVGElement> {
    height: TriangleDownHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z"></path>',
    },
};

export default function TriangleDown({ height, ...props }: TriangleDownProps) {
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
