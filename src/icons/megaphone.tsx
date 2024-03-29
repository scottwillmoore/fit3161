import { SVGProps } from "react";

export type MegaphoneHeight = "16" | "24";

export interface MegaphoneProps extends SVGProps<SVGSVGElement> {
    height: MegaphoneHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<g fill-rule="evenodd"><path d="M3.25 9a.75.75 0 01.75.75c0 2.142.456 3.828.733 4.653a.121.121 0 00.05.064.207.207 0 00.117.033h1.31c.085 0 .18-.042.258-.152a.448.448 0 00.075-.366A16.74 16.74 0 016 9.75a.75.75 0 011.5 0c0 1.588.25 2.926.494 3.85.293 1.113-.504 2.4-1.783 2.4H4.9c-.686 0-1.35-.41-1.589-1.12A16.42 16.42 0 012.5 9.75.75.75 0 013.25 9z"></path><path d="M0 6a4 4 0 014-4h2.75a.75.75 0 01.75.75v6.5a.75.75 0 01-.75.75H4a4 4 0 01-4-4zm4-2.5a2.5 2.5 0 000 5h2v-5H4z"></path><path d="M15.59.082A.75.75 0 0116 .75v10.5a.75.75 0 01-1.189.608l-.002-.001h.001l-.014-.01a5.829 5.829 0 00-.422-.25 10.58 10.58 0 00-1.469-.64C11.576 10.484 9.536 10 6.75 10a.75.75 0 110-1.5c2.964 0 5.174.516 6.658 1.043.423.151.787.302 1.092.443V2.014c-.305.14-.669.292-1.092.443C11.924 2.984 9.713 3.5 6.75 3.5a.75.75 0 110-1.5c2.786 0 4.826-.484 6.155-.957.665-.236 1.154-.47 1.47-.64a5.82 5.82 0 00.421-.25l.014-.01a.75.75 0 01.78-.061zm-.78.06zm.44 11.108l-.44.607.44-.607z"></path></g>',
    },
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M22 1.75a.75.75 0 00-1.161-.627c-.047.03-.094.057-.142.085a9.15 9.15 0 01-.49.262c-.441.22-1.11.519-2.002.82-1.78.6-4.45 1.21-7.955 1.21H6.5A5.5 5.5 0 005 14.293v.457c0 3.061.684 5.505 1.061 6.621.24.709.904 1.129 1.6 1.129h2.013c1.294 0 2.1-1.322 1.732-2.453-.412-1.268-.906-3.268-.906-5.547 0-.03-.002-.06-.005-.088 3.382.028 5.965.644 7.703 1.251.89.312 1.559.62 2 .849.084.043.171.096.261.15.357.214.757.455 1.142.25A.75.75 0 0022 16.25V1.75zM10.5 12.912c3.564.029 6.313.678 8.193 1.335.737.258 1.34.517 1.807.74V2.993c-.467.216-1.073.467-1.815.718-1.878.634-4.624 1.26-8.185 1.288v7.913zm-4 1.838v-.25H9c0 2.486.537 4.648.98 6.01a.398.398 0 01-.057.343c-.07.104-.162.147-.249.147H7.661c-.105 0-.161-.058-.179-.109-.344-1.018-.982-3.294-.982-6.141zM6.5 5H9v8H6.5a4 4 0 010-8z"></path>',
    },
};

export default function Megaphone({ height, ...props }: MegaphoneProps) {
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
