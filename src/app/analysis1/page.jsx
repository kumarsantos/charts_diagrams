"use client";
import React, { useState } from "react";
import Image from "next/image";
import Icon1 from "../../assets/icons/Icon.png";
import Icon2 from "../../assets/icons/Icon (2).png";
import Icon3 from "../../assets/icons/Icon (3).png";
import Icon4 from "../../assets/icons/Icon (4).png";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { AgChartsReact } from "ag-charts-react";
import "ag-charts-enterprise";

ChartJS.register(ArcElement, Tooltip);
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

function getData() {
  return [
    { category: "Market Analysis", value: 30 },
    { category: "Strategic Vision", value: 20 },
    { category: "Product Planning", value: 10 },
    { category: "Business Finance", value: 20 },
    { category: `GoTo Market`, value: 20 },
  ].map((item) => ({
    ...item,
    category: `${item.category} ${item.value}%`,
  }));
}

const ChartExample = () => {
  const [options, setOptions] = useState({
    data: getData(),
    series: [
      {
        type: "pie",
        angleKey: "value",
        calloutLabelKey: "category",
        showInLegend: false,
        // fills:['red','blue'],
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
          // formatter: ({ value }) => `$${(value / 1000).toFixed(0)}K`,
        },
      },
    ],
  });

  return <AgChartsReact options={options} />;
};

function getRadarChartData() {
  return [
    {
      department: "Business Finance",
      quality: 3,
      efficiency: 75,
    },
    {
      department: "GoTo Market",
      quality: 3,
      efficiency: 90,
    },
    {
      department: "Market Analysis",
      quality: 3,
      efficiency: 60,
    },
    {
      department: "Strategic Vision",
      quality: 4,
      efficiency: 60,
    },
    {
      department: "Product Planning",
      quality: 4.5,
      efficiency: 50,
    },
  ];
}

const RadarChart = () => {
  const [options, setOptions] = useState({
    data: getRadarChartData(),
    series: [
      {
        fill: "#F9A20A",
        type: "radar-area",
        angleKey: "department",
        radiusKey: "quality",
        radiusName: "Quality",
      },
    ],
  });

  return <AgChartsReact options={options} />;
};

const gaugeChartData = {
  labels: [
    "Market Analysis",
    "Strategic Vision",
    "Product Planning",
    "Business Finance",
    "GoTo Market",
  ],
  datasets: [
    {
      data: [5, 5, 5, 4, 5],
      backgroundColor: "#FFA500",
      borderColor: "green",
      borderWidth: 2,
    },
  ],
};

const IconList = [
  {
    icon: Icon1,
    obtail_score: 20,
    total: 30,
    description: "overall score",
  },
  {
    icon: Icon2,
    obtail_score: 25,
    total: 30,
    description: "time taken (min)",
  },
  {
    icon: Icon3,
    obtail_score: 25,
    total: 30,
    description: "questions attempted",
  },
  {
    icon: Icon4,
    obtail_score: 20,
    total: 30,
    description: "correct answers",
  },
];

const Analysis1 = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-orange-400 text-white uppercase px-16 py-2">
        <h1 className="text-4xl font-bold">Yogesh sharma</h1>
        <p className=" font-bold text-xl tracking-wide mt-2 text-gray-200">
          Skill: Market Analysis
        </p>
      </div>
      <div className="flex items-center my-8 justify-between">
        <div className="max-w-[50%] h-[90%]">
          <RadarChart />
        </div>
        <div className="flex flex-col gap-y-4">
          {IconList.map((item, idx) => (
            <div className="flex items-center w-full gap-x-2">
              <div className="w-auto">
                <Image src={item.icon} alt="icon" height={64} width={64} />
              </div>
              <div className="w-auto">
                <p className="w-auto text-gray-700 uppercase text-sm">
                  <span className="text-2xl font-bold">
                    {item.obtail_score}
                  </span>{" "}
                  out of {item.total}
                </p>
                <p className="w-auto uppercase text-sm font-medium tracking-wider">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="bg-orange-400 uppercase text-2xl font-bold tracking-wider text-gray-200 px-16 py-2">
        Skill distribution in the assessment
      </h1>
      <div className="w-full h-[350px] mt-10  flex items-center justify-center">
        <ChartExample />
      </div>
    </div>
  );
};

export default Analysis1;
