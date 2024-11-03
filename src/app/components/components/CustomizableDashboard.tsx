"use client";

import { SemiCircleSvg } from "@/app/svg/SvgIcons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const CustomizableDashboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [isInView, controls]);

  const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: [0, 0.5, 1],
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div>
      <motion.div
        className="container mt-16 flex size-full shrink flex-col gap-10 xl:flex-row"
        ref={ref}
        variants={textVariants}
        initial="initial"
        animate={controls}
      >
        <div className="relative overflow-hidden rounded-2xl bg-white s:px-6 xl:w-1/2">
          <div className="absolute right-0 top-20 z-0 size-full">
            <SemiCircleSvg />
          </div>
          {/* Customizable Dashboard */}
          <div className="z-10 mx-auto mt-20 flex shrink translate-x-10 flex-col items-start justify-center rounded-t-2xl bg-colored p-4 s:translate-y-24 xs:translate-y-10 md:max-w-screen-md md:translate-x-36 lg:translate-x-56">
            {/* Summary */}
            <div className="flex size-full flex-col gap-4">
              <div className="flex size-full flex-1 flex-row gap-4">
                <div className="flex size-full flex-col items-start justify-center rounded-md bg-white p-6 s:min-h-[361px] xs:min-h-[321px] lg:min-h-[321px] xl:min-h-[321px]">
                  <h2 className="text-[.8rem] font-medium">Summary</h2>
                  <div className="mt-6 flex size-full items-center justify-between">
                    <h3 className="text-[.6rem] font-medium">Total Value</h3>
                    <p className="text-[.6rem] font-medium">$12,650.27</p>
                  </div>
                  <div className="my-3 flex h-2 w-full">
                    <div className="h-full w-[30%] rounded-l-full bg-[#decf99]"></div>
                    <div className="h-full w-[70%] rounded-r-full bg-clrnavbar"></div>
                  </div>
                  <div className="mb-4 flex size-full items-center justify-between">
                    <div className="flex items-center justify-center gap-2">
                      <div className="size-2 rounded-full bg-blue-600" />
                      <h2 className="text-[.6rem] font-medium">Cash</h2>
                    </div>
                    <h2 className="text-[.6rem] font-medium">30%</h2>
                  </div>
                  <div className="mb-4 flex size-full items-center justify-between">
                    <div className="flex items-center justify-center gap-2">
                      <div className="size-2 rounded-full bg-green-600" />
                      <h2 className="text-[.6rem] font-medium">Investments</h2>
                    </div>
                    <h2 className="text-[.6rem] font-medium">70%</h2>
                  </div>
                  <div className="flex size-full items-center justify-between">
                    <div className="flex items-center justify-center gap-2">
                      <div className="size-2 rounded-full bg-sky-800" />
                      <h2 className="text-[.6rem] font-medium">Debt</h2>
                    </div>
                    <h2 className="text-[.6rem] font-medium">0%</h2>
                  </div>

                  <div className="mt-5 h-px w-full bg-gray-300" />
                  <div className="mt-5 flex size-full items-center justify-between">
                    <h2 className="text-[.6rem] font-medium">Day Change</h2>
                    <h2 className="text-[.6rem] font-medium text-green-500">
                      +$135.50 (0.50%)
                    </h2>
                  </div>
                  <button className="mt-5 w-full cursor-text rounded-md border-[.5px] border-gray-400 bg-transparent p-2 text-[.6rem] font-medium text-gray-500">
                    View Statements
                  </button>
                </div>
                <div className="size-full min-h-[361px] flex-col items-start justify-center rounded-md bg-white p-6 s:hidden s:min-h-[361px] xs:min-h-[321px] md:flex lg:min-h-[321px] xl:min-h-[321px]" />
              </div>
              <div className="flex size-full flex-row gap-4">
                <div className="flex size-full flex-col items-start justify-center rounded-md bg-white p-6" />
                <div className="flex size-full flex-col items-start justify-center rounded-md bg-white p-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start xl:w-1/2">
          <h1 className="mb-5 text-xl font-medium text-clrtitle">
            Customizable Dashboard
          </h1>
          <p className="text-clrparagraph">
            Trinity`s platform offers a customizable dashboard that allows users
            to personalize their experience based on their preferences and
            priorities. Users can rearrange widgets, add or remove modules, and
            tailor the dashboard layout to suit their individual needs.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomizableDashboard;
