"use client";
import React, { useState } from "react";
import Image from "next/image";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
  Tooltip,
} from "chart.js";

import RadarChart from "../../components/RadarChart";
import PieChart from "../../components/PieChart";
import { IconList } from "../../utils/constant";

ChartJS.register(ArcElement, Tooltip);
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const pieChartData = [
  { category: "Market Analysis", value: 30 },
  { category: "Strategic Vision", value: 20 },
  { category: "Product Planning", value: 10 },
  { category: "Business Finance", value: 20 },
  { category: `GoTo Market`, value: 20 },
].map((item) => ({
  ...item,
  category: `${item.category} ${item.value}%`,
}));

const RadarChartData = [
  {
    department: "Business Finance",
    value: 3,
    efficiency: 75,
  },
  {
    department: "GoTo Market",
    value: 3,
    efficiency: 90,
  },
  {
    department: "Market Analysis",
    value: 3,
    efficiency: 60,
  },
  {
    department: "Strategic Vision",
    value: 4,
    efficiency: 60,
  },
  {
    department: "Product Planning",
    value: 4.5,
    efficiency: 50,
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
        <div className="max-w-[50%] ml-4">
          <RadarChart data={RadarChartData} />
        </div>
        <div className="flex flex-col items-end gap-y-4 w-fit">
          {IconList.map((item, idx) => (
            <div className="flex items-center w-full gap-x-2 mr-4">
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
        <PieChart data={pieChartData} />
      </div>
    </div>
  );
};

export default Analysis1;
