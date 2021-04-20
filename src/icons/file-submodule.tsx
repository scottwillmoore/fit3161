import { SVGProps } from "react";

export type FileSubmoduleHeight = "16" | "24";

export interface FileSubmoduleProps extends SVGProps<SVGSVGElement> {
    height: FileSubmoduleHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M0 2.75C0 1.784.784 1 1.75 1H5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 00.2.1h6.75c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25V2.75zm9.42 9.36l2.883-2.677a.25.25 0 000-.366L9.42 6.39a.25.25 0 00-.42.183V8.5H4.75a.75.75 0 100 1.5H9v1.927c0 .218.26.331.42.183z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M2 4.75C2 3.784 2.784 3 3.75 3h4.965a1.75 1.75 0 011.456.78l1.406 2.109a.25.25 0 00.208.111h8.465c.966 0 1.75.784 1.75 1.75v11.5A1.75 1.75 0 0120.25 21H3.75A1.75 1.75 0 012 19.25V4.75zm12.78 4.97a.75.75 0 10-1.06 1.06l1.72 1.72H6.75a.75.75 0 000 1.5h8.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3a.75.75 0 000-1.06l-3-3z"></path>',
    },
};

export default function FileSubmodule({
    height,
    ...props
}: FileSubmoduleProps) {
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
