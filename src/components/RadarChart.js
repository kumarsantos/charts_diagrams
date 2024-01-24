"use client";
import { AgChartsReact } from "ag-charts-react";
import React from "react";

const RadarChart = ({ data }) => {
  const options = {
    data: data,
    series: [
      {
        fill: "#F9A20A",
        type: "radar-area",
        angleKey: "department",
        radiusKey: "value",
        radiusName: "Category",
      },
    ],
  };

  return <AgChartsReact options={options} />;
};

export default RadarChart;
