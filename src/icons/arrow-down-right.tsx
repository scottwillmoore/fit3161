import { SVGProps } from "react";

export type ArrowDownRightHeight = "24";

export interface ArrowDownRightProps extends SVGProps<SVGSVGElement> {
    height: ArrowDownRightHeight;
}

const heightMap = {
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M18.25 8.5a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-9a.75.75 0 010-1.5h7.19L6.22 7.28a.75.75 0 011.06-1.06L17.5 16.44V9.25a.75.75 0 01.75-.75z"></path>',
    },
};

export default function ArrowDownRight({ height, ...props }: ArrowDownRightProps) {
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
