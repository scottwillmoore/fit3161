import { Linechart } from "@/components";

const wptas_data = Array(5, 6, 9, 9, 10, 4, 6, 10, 12);
const abs_data = Array(52, 24, 26, 42, 33, 27, 49, 50, 54);

export function Analysis() {
    return (
        <div>
            <Linechart data={wptas_data} test="wptas"></Linechart>
            <Linechart data={abs_data} test="abs"></Linechart>
        </div>
    );
}
