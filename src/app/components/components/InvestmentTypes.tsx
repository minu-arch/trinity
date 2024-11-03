"use client";

import { CandelstSvg, GoalSvg, ChartSvg } from "@/app/svg/SvgIcons";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const InvestmentTypes = () => {
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
    <div className="container mt-10 flex size-full flex-col gap-6 xl:flex-row">
      <div className="flex size-full h-28 gap-4">
        <div className="h-full w-[0.1px] bg-[#546c4c]" />
        <motion.div
          className="flex size-full flex-col justify-end"
          ref={ref}
          variants={textVariants}
          initial="initial"
          animate={controls}
        >
          <GoalSvg />
          <motion.h2 className="variants={textVariants} mt-2 font-medium text-clrtitle s:text-[14px] md:text-[16px]">
            Goal-based Planning
          </motion.h2>
          <motion.p className="variants={textVariants} mt-3 text-[14px] text-clrparagraph s:text-[11px] md:text-[14px]">
            Save and invest for your retirement years, ensuring a{"\n"}
            comfortable lifestyle when you stop working.
          </motion.p>
        </motion.div>
      </div>
      <div className="flex size-full h-28 gap-4">
        <div className="h-full w-[0.1px] bg-[#546c4c]" />
        <motion.div
          className="flex size-full flex-col justify-end"
          ref={ref}
          variants={textVariants}
          initial="initial"
          animate={controls}
        >
          <CandelstSvg />
          <motion.h2 className="variants={textVariants} mt-2 font-medium text-clrtitle s:text-[14px] md:text-[16px]">
            Automated Rebalancing
          </motion.h2>
          <motion.p className="variants={textVariants} mt-3 text-[14px] text-clrparagraph s:text-[11px] md:text-[14px]">
            Save and invest for your retirement years, ensuring a{"\n"}
            comfortable lifestyle when you stop working.
          </motion.p>
        </motion.div>
      </div>
      <div className="flex size-full h-28 gap-4">
        <div className="h-full w-[0.1px] bg-[#546c4c]" />
        <motion.div
          className="flex size-full flex-col justify-end"
          ref={ref}
          variants={textVariants}
          initial="initial"
          animate={controls}
        >
          <ChartSvg />
          <motion.h2 className="variants={textVariants} mt-2 font-medium text-clrtitle s:text-[14px] md:text-[16px]">
            Retirement Income Projections
          </motion.h2>
          <motion.p className="variants={textVariants} mt-3 text-[14px] text-clrparagraph s:text-[11px] md:text-[14px]">
            Save and invest for your retirement years, ensuring a{"\n"}
            comfortable lifestyle when you stop working.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestmentTypes;
