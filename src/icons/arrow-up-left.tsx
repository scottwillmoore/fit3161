import { SVGProps } from "react";

export type ArrowUpLeftHeight = "24";

export interface ArrowUpLeftProps extends SVGProps<SVGSVGElement> {
    height: ArrowUpLeftHeight;
}

const heightMap = {
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M5.75 15.5a.75.75 0 01-.75-.75v-9A.75.75 0 015.75 5h9a.75.75 0 010 1.5H7.56l10.22 10.22a.75.75 0 11-1.06 1.06L6.5 7.56v7.19a.75.75 0 01-.75.75z"></path>',
    },
};

export default function ArrowUpLeft({ height, ...props }: ArrowUpLeftProps) {
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
