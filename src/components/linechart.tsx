import { Line } from "react-chartjs-2";

const red_bg = "rgba(230, 41, 55, 0.3)";
const green_bg = "rgba(120, 190, 172, 0.3)";
const blue_bg = "rgba(54, 162, 235, 0.3)";

const red_border = "rgba(230, 41, 55, 1)";
const green_border = "rgba(120, 190, 172, 1)";
const blue_border = "rgba(54, 162, 235, 1)";

const options = {
    scales: {
        y: {
            suggestedMin: 0,
            suggestedMax: 12,
        },
    },
};

/**
 * function to add all number elements in the array
 * @param array array containing numbers to be added
 * @returns sum of all number in array
 */
let sum = (array: number[]): number => {
    return array.reduce((sum, current) => sum + current, 0);
};

export type LinechartProps = {
    data: number[][];
    test: string;
};

export function Linechart({ data, test }: LinechartProps) {
    let label, backgroundColor, borderColor, dataset, selected_data;

    if (test == "wptas") {
        label = "WPTAS";
        backgroundColor = "rgba(75,192,192,0.2)";
        borderColor = "rgba(75,192,192,1)";

        // dataset used to generate line graph
        dataset = [
            {
                label: label,
                data: data.map((x) => sum(x)),
                fill: true,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                tension: 0.2,
            },
        ];
    } else if (test == "abs") {
        backgroundColor = [green_bg, red_bg, blue_bg];
        borderColor = [green_border, red_border, blue_border];
        selected_data = [
            data.map((x: number[]) => x.slice(0, 3).concat(x.slice(5, 10))),
            data.map((x: number[]) => x.slice(2, 5).concat(x.slice(13, 14))),
            data.map((x: number[]) => x.slice(10, 13)),
        ];
        
        // dataset used to generate line graph
        dataset = [
            {
                label: "Disinhibition",
                data: selected_data[0].map((x) => sum(x)),
                fill: true,
                backgroundColor: backgroundColor[0],
                borderColor: borderColor[0],
                tension: 0.2,
            },
            {
                label: "Aggression",
                data: selected_data[1].map((x) => sum(x)),
                fill: true,
                backgroundColor: backgroundColor[1],
                borderColor: borderColor[1],
                tension: 0.2,
            },
            {
                label: "Lability",
                data: selected_data[2].map((x) => sum(x)),
                fill: true,
                backgroundColor: backgroundColor[2],
                borderColor: borderColor[2],
                tension: 0.2,
            },
        ];
    }

    // dynamically generate number of days based on number of data in data array
    const days = [...Array(data.length).keys()].map((x) => "Day " + (x + 1));

    const scores = data.map((x) => sum(x));

    const labels = [];

    for (let i = 0; i < days.length; i++) {
        labels.push([days[i], "Score: " + scores[i]]);
    }

    // dynamic data
    const test_data = {
        labels: labels,
        datasets: dataset,
    };

    return <Line data={test_data} options={options} type="line" />;
}
