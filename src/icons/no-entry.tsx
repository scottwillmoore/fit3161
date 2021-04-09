import { SVGProps } from "react";

export type NoEntryHeight = "16" | "24";

export interface NoEntryProps extends SVGProps<SVGSVGElement> {
    height: NoEntryHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M2.5 8a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM8 1a7 7 0 100 14A7 7 0 008 1zm3.25 7.75a.75.75 0 000-1.5h-6.5a.75.75 0 000 1.5h6.5z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm6.25 11.75a.75.75 0 000-1.5H5.75a.75.75 0 000 1.5h12.5z"></path>',
    },
};

export default function NoEntry({ height, ...props }: NoEntryProps) {
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
