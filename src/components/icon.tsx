import { Icon } from "octicons";

const sizeMap = {
    small: 16,
    medium: 16,
    large: 16,
};

export type Size = keyof typeof sizeMap;

export type IconProperties = {
    icon: Icon;
    size: Size;
};

export default function Icon({ icon: Octicon, size }: IconProperties) {
    return <Octicon size={sizeMap[size]} />;
}
