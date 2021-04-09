import { SVGProps } from "react";

export type FileSymlinkFileHeight = "16" | "24";

export interface FileSymlinkFileProps extends SVGProps<SVGSVGElement> {
    height: FileSymlinkFileHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M2 1.75C2 .784 2.784 0 3.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0112.25 15h-7a.75.75 0 010-1.5h7a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75a.25.25 0 00-.25.25V4.5a.75.75 0 01-1.5 0V1.75zm7.5-.188V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013L9.513 1.573a.248.248 0 00-.013-.011zm-8 10.675a2.25 2.25 0 012.262-2.25L4 9.99v1.938c0 .218.26.331.42.183l2.883-2.677a.25.25 0 000-.366L4.42 6.39a.25.25 0 00-.42.183V8.49l-.23-.001A3.75 3.75 0 000 12.238v1.012a.75.75 0 001.5 0v-1.013z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M3 3a2 2 0 012-2h9.982a2 2 0 011.414.586l4.018 4.018A2 2 0 0121 7.018V21a2 2 0 01-2 2H4.75a.75.75 0 010-1.5H19a.5.5 0 00.5-.5V8.5h-4a2 2 0 01-2-2v-4H5a.5.5 0 00-.5.5v6.25a.75.75 0 01-1.5 0V3zm12-.5v4a.5.5 0 00.5.5h4a.5.5 0 00-.146-.336l-4.018-4.018A.5.5 0 0015 2.5zm-5.692 12l-2.104-2.236a.75.75 0 111.092-1.028l3.294 3.5a.75.75 0 010 1.028l-3.294 3.5a.75.75 0 11-1.092-1.028L9.308 16H4.09a2.59 2.59 0 00-2.59 2.59v3.16a.75.75 0 01-1.5 0v-3.16a4.09 4.09 0 014.09-4.09h5.218z"></path>',
    },
};

export default function FileSymlinkFile({ height, ...props }: FileSymlinkFileProps) {
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
