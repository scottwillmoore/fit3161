import { SVGProps } from "react";

export type ServerHeight = "16" | "24";

export interface ServerProps extends SVGProps<SVGSVGElement> {
    height: ServerHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v4c0 .372.116.717.314 1a1.742 1.742 0 00-.314 1v4c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0016 12.75v-4c0-.372-.116-.717-.314-1 .198-.283.314-.628.314-1v-4A1.75 1.75 0 0014.25 1H1.75zm0 7.5a.25.25 0 00-.25.25v4c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-4a.25.25 0 00-.25-.25H1.75zM1.5 2.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v4a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-4zm5.5 2A.75.75 0 017.75 4h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 4.75zM7.75 10a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM3 4.75A.75.75 0 013.75 4h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 4.75zM3.75 10a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path d="M10.75 6.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zM6 7.25a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 016 7.25zm4 9a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75zm-3.25-.75a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path><path fill-rule="evenodd" d="M3.25 2A1.75 1.75 0 001.5 3.75v7c0 .372.116.716.314 1a1.742 1.742 0 00-.314 1v7c0 .966.784 1.75 1.75 1.75h17.5a1.75 1.75 0 001.75-1.75v-7c0-.372-.116-.716-.314-1 .198-.284.314-.628.314-1v-7A1.75 1.75 0 0020.75 2H3.25zm0 9h17.5a.25.25 0 00.25-.25v-7a.25.25 0 00-.25-.25H3.25a.25.25 0 00-.25.25v7c0 .138.112.25.25.25zm0 1.5a.25.25 0 00-.25.25v7c0 .138.112.25.25.25h17.5a.25.25 0 00.25-.25v-7a.25.25 0 00-.25-.25H3.25z"></path>',
    },
};

export default function Server({ height, ...props }: ServerProps) {
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
