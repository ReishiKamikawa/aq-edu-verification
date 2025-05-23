import { BarChart } from "@mantine/charts";
import { Fieldset, Text } from "@mantine/core";

export default function F_6cnw99q4zo_Chart1() {
    return (
        <Fieldset legend="Tỷ lệ kết quả đo lường chuẩn đầu ra môn học">
            <Text mb={'md'} fw={600} size="lg">TỶ LỆ SV ĐẠT THEO TỪNG CLO</Text>
            <BarChart
                h={300}
                data={data}
                dataKey="name"
                withBarValueLabel
                withLegend
                unit="%"
                // yAxisProps={{
                //     domain: [0, 120], // Đặt giá trị tối đa của trục y là 120
                // }}
                series={[
                    { name: 'Đạt', color: 'green.6' },
                    { name: 'Không đạt', color: 'red.6' },

                ]}
                tickLine="y"
            />
        </Fieldset>
    )
}


const data = [
    { name: 'CLO1', "Đạt": 74.5, "Không đạt": 25.5 },
    { name: 'CLO2', "Đạt": 78.2, "Không đạt": 21.8 },
    { name: 'CLO3', "Đạt": 52.7, "Không đạt": 47.3 },
    { name: 'CLO4', "Đạt": 70.9, "Không đạt": 29.1 },
    { name: 'CLO5', "Đạt": 89.1, "Không đạt": 10.9 },
];
