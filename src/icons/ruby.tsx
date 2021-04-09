import { SVGProps } from "react";

export type RubyHeight = "16" | "24";

export interface RubyProps extends SVGProps<SVGSVGElement> {
    height: RubyHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M3.637 2.291A.75.75 0 014.23 2h7.54a.75.75 0 01.593.291l3.48 4.5a.75.75 0 01-.072.999l-7.25 7a.75.75 0 01-1.042 0l-7.25-7a.75.75 0 01-.072-.999l3.48-4.5zM4.598 3.5L1.754 7.177 8 13.207l6.246-6.03L11.402 3.5H4.598z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M5.873 3.26A.75.75 0 016.44 3h11.31a.75.75 0 01.576.27l5 6a.75.75 0 01-.028.992l-10.75 11.5a.75.75 0 01-1.096 0l-10.75-11.5a.75.75 0 01-.02-1.003l5.19-6zm.91 1.24L2.258 9.73 12 20.153l9.75-10.43L17.399 4.5H6.783z"></path>',
    },
};

export default function Ruby({ height, ...props }: RubyProps) {
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
