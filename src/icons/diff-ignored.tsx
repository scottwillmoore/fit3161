import { SVGProps } from "react";

export type DiffIgnoredHeight = "16";

export interface DiffIgnoredProps extends SVGProps<SVGSVGElement> {
    height: DiffIgnoredHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M2.75 2.5h10.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V2.75a.25.25 0 01.25-.25zM13.25 1H2.75A1.75 1.75 0 001 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zm-1.97 4.78a.75.75 0 00-1.06-1.06l-5.5 5.5a.75.75 0 101.06 1.06l5.5-5.5z"></path>',
    },
};

export default function DiffIgnored({ height, ...props }: DiffIgnoredProps) {
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
