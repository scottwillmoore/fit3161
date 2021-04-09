import { SVGProps } from "react";

export type IssueClosedHeight = "16" | "24";

export interface IssueClosedProps extends SVGProps<SVGSVGElement> {
    height: IssueClosedHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 0110.65-5.003.75.75 0 00.959-1.153 8 8 0 102.592 8.33.75.75 0 10-1.444-.407A6.5 6.5 0 011.5 8zM8 12a1 1 0 100-2 1 1 0 000 2zm0-8a.75.75 0 01.75.75v3.5a.75.75 0 11-1.5 0v-3.5A.75.75 0 018 4zm4.78 4.28l3-3a.75.75 0 00-1.06-1.06l-2.47 2.47-.97-.97a.749.749 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06 0z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path d="M2.5 12c0-5.24 4.288-9.5 9.593-9.5a9.608 9.608 0 017.197 3.219.75.75 0 001.12-.998A11.108 11.108 0 0012.093 1C5.973 1 1 5.919 1 12s4.973 11 11.093 11c5.403 0 9.91-3.832 10.893-8.915a.75.75 0 10-1.472-.285c-.848 4.381-4.74 7.7-9.421 7.7C6.788 21.5 2.5 17.24 2.5 12z"></path><path d="M12 17a1 1 0 100-2 1 1 0 000 2zm0-10a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0112 7zm11.28.78a.75.75 0 00-1.06-1.06l-3.47 3.47-1.47-1.47a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z"></path>',
    },
};

export default function IssueClosed({ height, ...props }: IssueClosedProps) {
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
