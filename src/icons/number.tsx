import { SVGProps } from "react";

export type NumberHeight = "16" | "24";

export interface NumberProps extends SVGProps<SVGSVGElement> {
    height: NumberHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M1 5.25a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H1.75A.75.75 0 011 5.25zm0 5.5a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H1.75a.75.75 0 01-.75-.75z"></path><path fill-rule="evenodd" d="M6.368 1.01a.75.75 0 01.623.859l-2 12.5a.75.75 0 01-1.482-.237l2-12.5a.75.75 0 01.86-.622zm5.5 0a.75.75 0 01.623.859l-2 12.5a.75.75 0 01-1.482-.237l2-12.5a.75.75 0 01.86-.622z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M2 8.25a.75.75 0 01.75-.75h18.5a.75.75 0 010 1.5H2.75A.75.75 0 012 8.25zm-.005 7.5a.75.75 0 01.75-.75v1.5a.75.75 0 01-.75-.75zm.75 0v.75H21.25a.75.75 0 000-1.5H2.745v.75z"></path><path fill-rule="evenodd" d="M9.62 2.01a.75.75 0 01.62.86l-3 18.5a.75.75 0 01-1.48-.24l3-18.5a.75.75 0 01.86-.62zm8 0a.75.75 0 01.62.86l-3 18.5a.75.75 0 01-1.48-.24l3-18.5a.75.75 0 01.86-.62z"></path>',
    },
};

export default function Number({ height, ...props }: NumberProps) {
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
