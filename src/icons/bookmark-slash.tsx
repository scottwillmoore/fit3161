import { SVGProps } from "react";

export type BookmarkSlashHeight = "16" | "24";

export interface BookmarkSlashProps extends SVGProps<SVGSVGElement> {
    height: BookmarkSlashHeight;
}

const heightMap = {
    "16": {
        width: 16,
        path:
            '<path fill-rule="evenodd" d="M1.19 1.143a.75.75 0 10-.88 1.214L3 4.305v9.945a.75.75 0 001.206.596L8 11.944l3.794 2.902A.75.75 0 0013 14.25v-2.703l1.81 1.31a.75.75 0 10.88-1.214l-2.994-2.168a1.09 1.09 0 00-.014-.01L4.196 3.32a.712.712 0 00-.014-.01L1.19 1.143zM4.5 5.39v7.341l3.044-2.328a.75.75 0 01.912 0l3.044 2.328V10.46l-7-5.07zM5.865 1a.75.75 0 000 1.5h5.385a.25.25 0 01.25.25v3.624a.75.75 0 001.5 0V2.75A1.75 1.75 0 0011.25 1H5.865z"></path>',
    },
    "24": {
        width: 24,
        path:
            '<path fill-rule="evenodd" d="M1.565 2.018a.75.75 0 00-.88 1.214L5 6.357v14.902a.75.75 0 001.219.585L12 17.21l5.781 4.633A.75.75 0 0019 21.259v-4.764l3.435 2.487a.75.75 0 10.88-1.215L1.565 2.017zM17.5 15.408l-11-7.965v12.254l5.031-4.032a.75.75 0 01.938 0l5.031 4.032v-4.288z"></path><path d="M7.25 2a.75.75 0 000 1.5h10a.25.25 0 01.25.25v6.5a.75.75 0 001.5 0v-6.5A1.75 1.75 0 0017.25 2h-10z"></path>',
    },
};

export default function BookmarkSlash({
    height,
    ...props
}: BookmarkSlashProps) {
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
