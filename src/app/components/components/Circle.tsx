"use client";
import { CircleSvg } from "@/app/svg/SvgIcons";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Circle = () => {
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

  const variants = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
  };

  return (
    <div>
      <motion.div
        className="absolute bottom-20 hidden md:right-[-200px] md:block lg:top-[-100px] 2xl:right-[-200px] 2xl:top-12"
        ref={ref}
        variants={variants}
        initial="initial"
        animate={controls}
        transition={{
          duration: 2,
          repeat: 0,
          ease: "linear",
        }}
      >
        <CircleSvg />
      </motion.div>
    </div>
  );
};

export default Circle;
