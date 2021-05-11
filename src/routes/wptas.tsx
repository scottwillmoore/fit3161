import { Checkbox, CheckboxGroup } from "@/components";
import { ChangeEventHandler, useEffect, useState } from "react";

export const images = [
    { id: 0, url: "/bird.png" },
    { id: 1, url: "/clock.png" },
    { id: 2, url: "/cup.png" },
    { id: 3, url: "/flower.png" },
    { id: 4, url: "/fork.png" },
    { id: 5, url: "/keys.png" },
    { id: 6, url: "/pen.png" },
    { id: 7, url: "/scissors.png" },
    { id: 8, url: "/toothbrush.png" },
];

let checked: any[] = [];

export function Wptas() {
    const [checked, setChecked] = useState(new Array(9).fill(false));

    // console.log(checked);

    const isDisabled = (id: number) => {
        return checked.filter((x) => x === true).length >= 3;
    };

    const isChecked = (id: number) => {
        return checked[id];
    };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        let temp = checked;
        temp[parseInt(event.target.id)] = !checked[parseInt(event.target.id)];

        setChecked(temp);
    };

    return (
        <CheckboxGroup>
            {images.map((img, key) => {
                console.log(img.id);
                console.log(isChecked(img.id));
                return (
                    <Checkbox
                        key={key}
                        img_src={img.url}
                        checked={isChecked(img.id)}
                        disabled={isDisabled(img.id)}
                        onChange={handleChange}
                    />
                );
            })}
        </CheckboxGroup>
    );
}
