import { SVGProps } from "react";

export type PlugHeight = "16" | "24";

export interface PlugProps extends SVGProps<SVGSVGElement> {
    height: PlugHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M10.276 3.09a.25.25 0 01.192-.09h.782a.25.25 0 01.25.25v8.5a.25.25 0 01-.25.25h-.782a.25.25 0 01-.192-.09l-.95-1.14a.75.75 0 00-.483-.264l-3.124-.39a.25.25 0 01-.219-.249V5.133a.25.25 0 01.219-.248l3.124-.39a.75.75 0 00.483-.265l.95-1.14zM4 8v1.867a1.75 1.75 0 001.533 1.737l2.83.354.761.912c.332.4.825.63 1.344.63h.782A1.75 1.75 0 0013 11.75V11h2.25a.75.75 0 000-1.5H13v-4h2.25a.75.75 0 000-1.5H13v-.75a1.75 1.75 0 00-1.75-1.75h-.782c-.519 0-1.012.23-1.344.63l-.76.913-2.831.353A1.75 1.75 0 004 5.133V6.5H2.5A2.5 2.5 0 000 9v5.25a.75.75 0 001.5 0V9a1 1 0 011-1H4z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M7 11.5v3.848a1.75 1.75 0 001.57 1.74l6.055.627 1.006 1.174a1.75 1.75 0 001.329.611h1.29A1.75 1.75 0 0020 17.75V15.5h3.25a.75.75 0 000-1.5H20V7.5h3.25a.75.75 0 000-1.5H20V3.75A1.75 1.75 0 0018.25 2h-1.29c-.51 0-.996.223-1.329.611l-1.006 1.174-6.055.626A1.75 1.75 0 007 6.151V10H2.937A2.938 2.938 0 000 12.938v8.312a.75.75 0 001.5 0v-8.313c0-.793.644-1.437 1.438-1.437H7zm9.77-7.913a.25.25 0 01.19-.087h1.29a.25.25 0 01.25.25v14a.25.25 0 01-.25.25h-1.29a.25.25 0 01-.19-.087l-1.2-1.401a.75.75 0 00-.493-.258l-6.353-.657a.25.25 0 01-.224-.249V6.152a.25.25 0 01.224-.249l6.353-.657a.75.75 0 00.492-.258l1.201-1.4z"></path>',
    },
};

export default function Plug({ height, ...props }: PlugProps) {
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
