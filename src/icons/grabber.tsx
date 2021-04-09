import { SVGProps } from "react";

export type GrabberHeight = "16" | "24";

export interface GrabberProps extends SVGProps<SVGSVGElement> {
    height: GrabberHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M15 18a1 1 0 100-2 1 1 0 000 2zm1-6a1 1 0 11-2 0 1 1 0 012 0zm-7 6a1 1 0 100-2 1 1 0 000 2zm0-5a1 1 0 100-2 1 1 0 000 2zm7-6a1 1 0 11-2 0 1 1 0 012 0zM9 8a1 1 0 100-2 1 1 0 000 2z"></path>',
    },
};

export default function Grabber({ height, ...props }: GrabberProps) {
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
