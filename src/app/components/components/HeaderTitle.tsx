import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const HeaderTitle = () => {
  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.p
        className="mt-5 whitespace-pre-wrap break-words text-center text-responsive-xs text-clrnavbar"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Explore the next frontier of tools to kickstart your
      </motion.p>
      <motion.p
        className="whitespace-pre-wrap break-words text-center text-responsive-xs text-clrnavbar"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        financial journey to success.
      </motion.p>
      <Button
        animated
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Get Started
      </Button>
      <motion.p
        className="mt-5 text-responsive-xs text-clrnavbar"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Try for free
      </motion.p>
    </div>
  );
};

export default HeaderTitle;
