import { SVGProps } from "react";

export type ArrowDownLeftHeight = "24";

export interface ArrowDownLeftProps extends SVGProps<SVGSVGElement> {
    height: ArrowDownLeftHeight;
}

const heightMap = {
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M5.75 8.5a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 000-1.5H7.56L17.78 7.28a.75.75 0 00-1.06-1.06L6.5 16.44V9.25a.75.75 0 00-.75-.75z"></path>',
    },
};

export default function ArrowDownLeft({
    height,
    ...props
}: ArrowDownLeftProps) {
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
