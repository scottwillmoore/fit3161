import { Checkbox, CheckboxGroup } from "@/components";
import { ChangeEventHandler, useState } from "react";

export const images = [
    { value: 0, url: "/pen.png" },
    { value: 1, url: "/bird.png" },
    { value: 2, url: "/flower.png" },
    { value: 3, url: "/cup.png" },
    { value: 4, url: "/keys.png" },
    { value: 5, url: "/toothbrush.png" },
    { value: 6, url: "/clock.png" },
    { value: 7, url: "/fork.png" },
    { value: 8, url: "/scissors.png" },
];

export function Wptas() {
    const [checked, setChecked] = useState(new Array(9).fill(false));

    // condition to disable the selection box
    const isDisabled = (id: number) => {
        return checked.filter((x) => x === true).length >= 3 && !checked[id];
    };

    // handler function to check and update the checked array
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        let temp = [...checked];
        temp[parseInt(event.target.value)] = !checked[
            parseInt(event.target.value)
        ];

        setChecked(temp);
    };

    return (
        <CheckboxGroup>
            {images.map(({ value, url }, key) => {
                return (
                    <Checkbox
                        key={key}
                        img_src={url}
                        value={value}
                        checked={checked[value]}
                        disabled={isDisabled(value)}
                        onChange={handleChange}
                    />
                );
            })}
        </CheckboxGroup>
    );
}
