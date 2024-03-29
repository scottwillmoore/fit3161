import { SVGProps } from "react";

export type IssueReopenedHeight = "16" | "24";

export interface IssueReopenedProps extends SVGProps<SVGSVGElement> {
    height: IssueReopenedHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M8 1.5a6.491 6.491 0 00-5.285 2.715l1.358 1.358A.25.25 0 013.896 6H.25A.25.25 0 010 5.75V2.104a.25.25 0 01.427-.177l1.216 1.216a8 8 0 0114.315 4.03.748.748 0 01-.668.83.75.75 0 01-.824-.676A6.501 6.501 0 008 1.5zM.712 8.004a.75.75 0 01.822.67 6.501 6.501 0 0011.751 3.111l-1.358-1.358a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.216-1.216A8 8 0 01.042 8.827a.75.75 0 01.67-.823zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path d="M3.38 8A9.502 9.502 0 0112 2.5a9.502 9.502 0 019.215 7.182.75.75 0 101.456-.364C21.473 4.539 17.15 1 12 1a10.995 10.995 0 00-9.5 5.452V4.75a.75.75 0 00-1.5 0V8.5a1 1 0 001 1h3.75a.75.75 0 000-1.5H3.38zm-.595 6.318a.75.75 0 00-1.455.364C2.527 19.461 6.85 23 12 23c4.052 0 7.592-2.191 9.5-5.451v1.701a.75.75 0 001.5 0V15.5a1 1 0 00-1-1h-3.75a.75.75 0 000 1.5h2.37A9.502 9.502 0 0112 21.5c-4.446 0-8.181-3.055-9.215-7.182z"></path><path d="M12 17a1 1 0 100-2 1 1 0 000 2zm0-10a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0112 7z"></path>',
    },
};

export default function IssueReopened({
    height,
    ...props
}: IssueReopenedProps) {
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
