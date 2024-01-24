"use client";
import Image from "next/image";
import React from "react";
import BackgroundImg from "../../assets/images/bg2.jpg";
import dynamic from "next/dynamic";
const GaugeChart = dynamic(() => import("react-gauge-chart"), { ssr: false });
const AboutPage = () => {
  const competencyResult = [
    {
      name: "Market Analysis",
      score: 5,
      color: "bg-green-500",
    },
    {
      name: "Strategic Vision",
      score: 3,
      color: "bg-orange-500",
    },
    {
      name: "Product Planning",
      score: 2,
      color: "bg-green-500",
    },
    {
      name: "Go-To-Market",
      score: 1,
      color: "bg-yellow-400",
    },
    {
      name: "Business Finance",
      score: 1,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="relative w-full h-full pb-8">
      <div className="h-[350px] w-full overflow-hidden flex items-center rounded-b-[40px] ">
        <div className="absolute lg:p-12 md:12 bg-slate-600 bg-opacity-70 text-white  w-full h-auto z-10">
          <h1 className="text-center text-3xl uppercase font-medium">
            About your skill report
          </h1>
          <p className="mx-16 text-muted-foreground mt-8 tracking-widest ">
            Gain a precise snapshot of your skillset with this targeted skills
            Assessment report. It identifies your professional strengths and
            area for growth, benchmarking you againt industry standards.
            Leverage this intel to strategically enhance your career trajectory.
            Consider this report your roadmap to professional excellence.
          </p>
        </div>
        <Image
          className="flex-shrink-0 min-w-[100%] min-h-[100%]"
          src={BackgroundImg}
          alt="background-image"
          priority
        />
      </div>
      <h1 className="mt-[2rem] w-full bg-orange-500 max-w-[50%] font-bold uppercase text-2xl pl-12 py-2">
        Results at a glance
      </h1>
      <div>
        <h2 className="uppercase mt-6 text-lg max-w-[50%] pl-12 font-bold text-yellow-400">
          Overall skill health
        </h2>
        <div className="relative flex justify-end">
          <GaugeChart
            id="gauge-chart5"
            nrOfLevels={3}
            arcsLength={[20, 20, 20, 20, 20]}
            arcWidth={0.4}
            colors={["#2B9105", "#58EE21", "#FAE708", "#FC8C0E", "#E32B04"]}
            percent={0.1}
            arcPadding={0.05}
            textColor="black"
            hideText={true}
          />
          <span className="absolute bottom-[8rem] left-[11rem] -rotate-[75deg] text-lg lg:bottom-[8rem] lg:left-[10.5rem] ">
            Novice
          </span>
          <span className=" text-center bottom-[16rem] left-[16.6rem]  absolute lg:bottom-[16rem]  -rotate-[35deg] text-lg  lg:left-[16.5rem] ">
            Adv.
            <br /> Beginner
          </span>
          <span className="absolute bottom-[20.5rem] left-[26rem] lg:bottom-[20.5rem]  rotate-[0deg] text-lg  lg:left-[26rem] ">
            Component
          </span>
          <span className="absolute text-lg bottom-[18rem] right-[16rem] rotate-[35deg]   lg:rotate-[35deg]  lg:bottom-[17.5rem] lg:right-[16rem] md:right-[15rem] md:bottom-[17.5rem] md:rotate-[30deg] ">
            Proficient
          </span>
          <span className="absolute bottom-[8rem] right-[10rem] rotate-[70deg] lg:rotate-[75deg] text-lg lg:bottom-[8rem] lg:right-[10rem] ">
            Expert
          </span>
        </div>
        <h2 className="uppercase mt-6 text-lg max-w-[50%] pl-12 font-bold text-yellow-400">
          competency-wise score
        </h2>
        <div className="flex gap-y-8 flex-wrap mx-16 mt-4">
          {competencyResult.map((item, idx) => (
            <div key={idx} className="max-w-[33%] w-full">
              <h3 className="font-medium tracking-wide text-gray-600">
                {item.name}
              </h3>
              <div className="flex  gap-x-1 mt-1">
                {[1, 2, 3, 4, 5].map((box, i) => (
                  <span
                    key={i}
                    className={`h-[24px] w-[24px]  ${
                      i < item.score ? item.color : "bg-gray-400"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
