import React from "react";
import PieChart from "../../components/PieChart";

const data = [
  {
    chartData: [
      { category: "Market Analysis", value: 30 },
      { category: "Strategic Vision", value: 20 },
      { category: "Product Planning", value: 10 },
      { category: "Business Finance", value: 20 },
      { category: `GoTo Market`, value: 20 },
    ],
    heading: "Market Analysis",
    description: `A proficient in Market Analysis skill spotlights a candidate's ability to understand potential customers, utilise design thingking to solve their problems, conduct experiments and validate assumptions.`,
  },
  {
    chartData: [
      { category: "Market Analysis", value: 30 },
      { category: "Strategic Vision", value: 20 },
      { category: "Product Planning", value: 10 },
      { category: "Business Finance", value: 20 },
      { category: `GoTo Market`, value: 20 },
    ],
    heading: "Market Analysis",
    description: `A proficient in Market Analysis skill spotlights a candidate's ability to understand potential customers, utilise design thingking to solve their problems, conduct experiments and validate assumptions.`,
  },
  {
    chartData: [
      { category: "Market Analysis", value: 30 },
      { category: "Strategic Vision", value: 20 },
      { category: "Product Planning", value: 10 },
      { category: "Business Finance", value: 20 },
      { category: `GoTo Market`, value: 20 },
    ],
    heading: "Market Analysis",
    description: `A proficient in Market Analysis skill spotlights a candidate's ability to understand potential customers, utilise design thingking to solve their problems, conduct experiments and validate assumptions.`,
  },
  {
    chartData: [
      { category: "Market Analysis", value: 30 },
      { category: "Strategic Vision", value: 20 },
      { category: "Product Planning", value: 10 },
      { category: "Business Finance", value: 20 },
      { category: `GoTo Market`, value: 20 },
    ],
    heading: "Market Analysis",
    description: `A proficient in Market Analysis skill spotlights a candidate's ability to understand potential customers, utilise design thingking to solve their problems, conduct experiments and validate assumptions.`,
  },
  {
    chartData: [
      { category: "Market Analysis", value: 30 },
      { category: "Strategic Vision", value: 20 },
      { category: "Product Planning", value: 10 },
      { category: "Business Finance", value: 20 },
      { category: `GoTo Market`, value: 20 },
    ],
    heading: "Market Analysis",
    description: `A proficient in Market Analysis skill spotlights a candidate's ability to understand potential customers, utilise design thingking to solve their problems, conduct experiments and validate assumptions.`,
  },
];

const Analysis2 = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-orange-400 text-white uppercase px-16 py-2">
        <h1 className="text-4xl font-bold">Yogesh sharma</h1>
        <p className=" font-bold text-xl tracking-wide mt-2 text-gray-200">
          Skill: Market Analysis
        </p>
      </div>
      <div className="mt-4">
        {data.map((item, idx) => (
          <div className="flex items-center" key={idx}>
            <div className="max-w-[50%]">
              <PieChart data={item.chartData} />
            </div>
            <div className="ml-8">
              <h2 className="font-bold text-orange-400 uppercase">
                {item.heading}
              </h2>
              <p className="text-sm mt-2 tracking-widest font-sm text-gray-600 pr-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analysis2;
