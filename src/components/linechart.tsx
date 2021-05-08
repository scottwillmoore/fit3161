import { Children } from "react";
import { Line } from "react-chartjs-2";

// // static data example
// const wptas_data = {
//     labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
//     datasets: [
//         {
//             label: "WPTAS",
//             data: [5, 6, 9, 9, 10, 12, 12],
//             fill: true,
//             backgroundColor: "rgba(75,192,192,0.2)",
//             borderColor: "rgba(75,192,192,1)",
//             tension: 0.3,
//         },
//     ],
// };

const options = {
    scales: {
        y: {
            suggestedMin: 0,
            suggestedMax: 12,
        },
    },
};

export type LinechartProps = {
    data: Array<number>;
    test: string;
};

export function Linechart({ data, test }: LinechartProps) {
    // dynamic data example
    let label, backgroundColor, borderColor;

    if (test == "wptas") {
        label = "WPTAS";
        backgroundColor = "rgba(75,192,192,0.2)";
        borderColor = "rgba(75,192,192,1)";
    } else if (test == "abs") {
        label = "ABS";
        backgroundColor = "rgba(192,104,75,0.2)";
        borderColor = "rgba(192,104,75,1)";
    }

    const test_data = {
        labels: [...Array(data.length).keys()].map((x) => "Day " + (x + 1)),
        datasets: [
            {
                label: label,
                data: data,
                fill: true,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                tension: 0.2,
            },
        ],
    };

    return <Line data={test_data} options={options} type="line" />;
}
