import { SVGProps } from "react";

export type TriangleUpHeight = "16" | "24";

export interface TriangleUpProps extends SVGProps<SVGSVGElement> {
    height: TriangleUpHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path d="M4.427 9.573l3.396-3.396a.25.25 0 01.354 0l3.396 3.396a.25.25 0 01-.177.427H4.604a.25.25 0 01-.177-.427z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path d="M12.354 8.854l5.792 5.792a.5.5 0 01-.353.854H6.207a.5.5 0 01-.353-.854l5.792-5.792a.5.5 0 01.708 0z"></path>',
    },
};

export default function TriangleUp({ height, ...props }: TriangleUpProps) {
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
