import { SVGProps } from "react";

export type MentionHeight = "16" | "24";

export interface MentionProps extends SVGProps<SVGSVGElement> {
    height: MentionHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M4.75 2.37a6.5 6.5 0 006.5 11.26.75.75 0 01.75 1.298 8 8 0 113.994-7.273.754.754 0 01.006.095v1.5a2.75 2.75 0 01-5.072 1.475A4 4 0 1112 8v1.25a1.25 1.25 0 002.5 0V7.867a6.5 6.5 0 00-9.75-5.496V2.37zM10.5 8a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M20.226 7.25a9.498 9.498 0 10-3.477 12.976.75.75 0 01.75 1.299c-5.26 3.037-11.987 1.235-15.024-4.026C-.562 12.24 1.24 5.512 6.501 2.475 11.76-.562 18.488 1.24 21.525 6.501a10.956 10.956 0 011.455 4.826c.013.056.02.113.02.173v2.25a3.5 3.5 0 01-6.623 1.581 5.5 5.5 0 111.112-3.682.76.76 0 01.011.129v1.972a2 2 0 104 0v-1.766a9.452 9.452 0 00-1.274-4.733zM16 12a4 4 0 10-8 0 4 4 0 008 0z"></path>',
    },
};

export default function Mention({ height, ...props }: MentionProps) {
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
