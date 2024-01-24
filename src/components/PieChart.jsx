"use client";
import { AgChartsReact } from "ag-charts-react";
import React from "react";
import "ag-charts-enterprise";

const PieChart = ({ data }) => {
  const options = {
    data: data,
    series: [
      {
        type: "pie",
        angleKey: "value",
        calloutLabelKey: "category",
        showInLegend: false,
        tooltip: {
          enable: false,
        },

        // sectorLabel: {
        //   color: "white",
        //   fontWeight: "bold",
        //   formatter: ({ value }) => `$${(value / 1000).toFixed(0)}K`,
        // },
      },
    ],
  };

  return <AgChartsReact options={options} />;
};

export default PieChart;
