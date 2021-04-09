import { SVGProps } from "react";

export type BookmarkFillHeight = "24";

export interface BookmarkFillProps extends SVGProps<SVGSVGElement> {
    height: BookmarkFillHeight;
}

const heightMap = {
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M6.69 2a1.75 1.75 0 00-1.75 1.756L5 21.253a.75.75 0 001.219.583L12 17.21l5.782 4.625A.75.75 0 0019 21.25V3.75A1.75 1.75 0 0017.25 2H6.69z"></path>',
    },
};

export default function BookmarkFill({ height, ...props }: BookmarkFillProps) {
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
