import { SVGProps } from "react";

export type BookmarkSlashFillHeight = "24";

export interface BookmarkSlashFillProps extends SVGProps<SVGSVGElement> {
    height: BookmarkSlashFillHeight;
}

const heightMap = {
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M3.232 2.175a.75.75 0 10-.964 1.15l2.679 2.244L5 21.253a.75.75 0 001.219.583L12 17.21l5.782 4.625A.75.75 0 0019 21.25v-3.907l1.768 1.482a.75.75 0 10.964-1.15l-18.5-15.5zM7.422 2a.75.75 0 00-.482 1.325l10.828 9.073A.75.75 0 0019 11.823V3.75A1.75 1.75 0 0017.25 2H7.421h.001z"></path>',
    },
};

export default function BookmarkSlashFill({
    height,
    ...props
}: BookmarkSlashFillProps) {
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
