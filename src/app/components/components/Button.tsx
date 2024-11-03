"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  animated?: boolean;
  variants?: Variants;
  initial?: string;
  animate?: string;
}

const Button = ({
  children,
  onClick,
  className = "",
  animated = false,
  variants,
  initial,
  animate,
}: ButtonProps) => {
  const ButtonComponent = animated ? motion.button : "button";

  return (
    <ButtonComponent
      onClick={onClick}
      className={`mt-5 rounded-md border border-b-4 border-[#EBECEA] bg-[#F7F7F8] px-2 py-1 text-[.9rem] font-semibold text-green-700 ${className}`}
      variants={animated ? variants : undefined}
      initial={animated ? initial : undefined}
      animate={animated ? animate : undefined}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
