import { SVGProps } from "react";

export type DotFillHeight = "16" | "24";

export interface DotFillProps extends SVGProps<SVGSVGElement> {
    height: DotFillHeight;
}

const heightMap = {
    "16": { width: 16, path: '<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>' },
    "24": { width: 24, path: '<path d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>' },
};

export default function DotFill({ height, ...props }: DotFillProps) {
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
