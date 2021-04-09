import { SVGProps } from "react";

export type DependabotHeight = "16" | "24";

export interface DependabotProps extends SVGProps<SVGSVGElement> {
    height: DependabotHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path d="M5.75 7.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm5.25.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"></path><path fill-rule="evenodd" d="M6.25 0a.75.75 0 000 1.5H7.5v2H3.75A2.25 2.25 0 001.5 5.75V8H.75a.75.75 0 000 1.5h.75v2.75a2.25 2.25 0 002.25 2.25h8.5a2.25 2.25 0 002.25-2.25V9.5h.75a.75.75 0 000-1.5h-.75V5.75a2.25 2.25 0 00-2.25-2.25H9V.75A.75.75 0 008.25 0h-2zM3 5.75A.75.75 0 013.75 5h8.5a.75.75 0 01.75.75v6.5a.75.75 0 01-.75.75h-8.5a.75.75 0 01-.75-.75v-6.5z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path d="M8.75 11a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5a.75.75 0 01.75-.75zm7.25.75a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path><path fill-rule="evenodd" d="M9.813 1a.75.75 0 000 1.5H11.5V5H4.25A2.25 2.25 0 002 7.25v5.25H.75a.75.75 0 000 1.5H2v5.75A2.25 2.25 0 004.25 22h15.5A2.25 2.25 0 0022 19.75V14h1.25a.75.75 0 000-1.5H22V7.25A2.25 2.25 0 0019.75 5H13V1.75a.75.75 0 00-.75-.75H9.812zM3.5 7.25a.75.75 0 01.75-.75h15.5a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75V7.25z"></path>',
    },
};

export default function Dependabot({ height, ...props }: DependabotProps) {
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
