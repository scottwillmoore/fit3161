import { Line } from "react-chartjs-2";

const wptas_data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
        {
            label: "WPTAS",
            data: [5, 6, 9, 9, 10, 12, 12],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            tension: 0.3,
        },
    ],
};

const options = {
    scales: {
        y: {
            suggestedMin: 0,
            suggestedMax: 12,
        },
    },
};

export function Linechart() {
    return (
        <div>
            <h1>Line Chart</h1>
            <Line data={wptas_data} options={options} type="line" />
        </div>
    );
}
