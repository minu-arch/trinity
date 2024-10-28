import * as React from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { useState, useEffect } from "react";

const uData = [50, 100, 150, 200, 250, 300];
const xLabels = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F"];

export default function TinyBarChart() {
  const [currentData, setCurrentData] = useState(uData.map(() => 0));
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const startAnimation = async () => {
      setIsAnimating(true);

      setCurrentData(uData.map(() => 0));

      for (let i = 0; i < uData.length; i++) {
        setCurrentData((prev) => {
          const newData = [...prev];
          newData[i] = uData[i];
          return newData;
        });
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsAnimating(false);
    };

    startAnimation();
  }, [isAnimating]);

  return (
    <ChartContainer
      width={500}
      height={300}
      series={[{ data: currentData, label: "uv", type: "bar" }]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
    >
      <BarPlot borderRadius={7} color="#546c4c" />
    </ChartContainer>
  );
}
