import * as React from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";

const uData = [50, 100, 150, 200, 250, 300];
const xLabels = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F"];

export default function TinyBarChart() {
  return (
    <ChartContainer
      width={500}
      height={300}
      series={[{ data: uData, label: "uv", type: "bar" }]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
    >
      <BarPlot borderRadius={7} color="#546c4c" />
    </ChartContainer>
  );
}
