import { SVGProps } from "react";

export type FileDirectoryFillHeight = "24";

export interface FileDirectoryFillProps extends SVGProps<SVGSVGElement> {
    height: FileDirectoryFillHeight;
}

const heightMap = {
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M2 4.75C2 3.784 2.784 3 3.75 3h4.971c.58 0 1.12.286 1.447.765l1.404 2.063a.25.25 0 00.207.11h8.471c.966 0 1.75.783 1.75 1.75V19.25A1.75 1.75 0 0120.25 21H3.75A1.75 1.75 0 012 19.25V4.75z"></path>',
    },
};

export default function FileDirectoryFill({
    height,
    ...props
}: FileDirectoryFillProps) {
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
