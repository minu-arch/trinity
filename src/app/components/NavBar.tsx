"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LogoNav } from "@/app/svg/SvgIcons";
import Button from "./components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { FadeText } from "@/components/ui/FadeText";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="container">
      <div className="mt-5 size-full text-clrnavbar">
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <div>
            <LogoNav />
          </div>

          <div className="hidden items-center justify-between gap-4 md:flex">
            <p>Investment</p>
            <p>Features</p>
            <p>Faq</p>
          </div>
          <p className="hidden md:block">Log In</p>

          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-4 flex h-screen flex-col items-start gap-2 md:hidden"
            >
              <FadeText
                text="Investment"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.2 } },
                }}
              />
              <FadeText
                text="Features"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
              />
              <FadeText
                text="Faq"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.6 } },
                }}
              />
              <FadeText
                text="Log In"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.8 } },
                }}
              />
              <Button className="!mt-1">My Template</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
