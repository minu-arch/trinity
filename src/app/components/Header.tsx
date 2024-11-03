"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import {
  ChartSvg,
  CandelstSvg,
  GoalSvg,
  SvgImg,
  HarmonySvg,
  ElasticSvg,
  TerraSvg,
  SageSvg,
  EchoSvg,
  VitalSvg,
} from "@/app/svg/SvgIcons";
import TinyBarChart from "./components/TinyBartChart";
import Button from "./components/Button";
import BlurIn from "@/components/ui/BlurIn";
import { Marquee } from "@/components/ui/Marquee";

const Header = () => {
  const [status, setStatus] = useState("deposit");

  useEffect(() => {
    const interval = setInterval(() => {
      if (status === "deposit") {
        setStatus("depositing");
      } else if (status === "depositing") {
        setStatus("successful");
      } else {
        setStatus("deposit");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [status]);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const boxVariants = {
    initial: { x: 20, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const secondVariants = {
    initial: { x: -20, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="container my-5">
      <div className="flex items-center justify-center rounded-2xl bg-colored">
        <div className="flex size-full flex-col p-2">
          <div className="mt-10 flex size-full flex-col items-center justify-center px-2 text-clrtitle md:px-10">
            <BlurIn
              className="!text-center !text-responsive-md"
              word="Retirement investing made simple"
            />

            <p className="mt-5 whitespace-pre-wrap break-words text-center text-responsive-xs text-clrnavbar">
              Explore the next frontier of tools to kickstart your
            </p>
            <p className="whitespace-pre-wrap break-words text-center text-responsive-xs text-clrnavbar">
              financial journey to success.
            </p>
            <Button>Get Started</Button>
            <p className="mt-5 text-responsive-xs text-clrnavbar">
              Try for free
            </p>
            <div className="my-5 flex size-full h-2/4 items-center justify-center rounded-md bg-[#546c4c] p-1 s:rounded-xl s:p-2 xs:p-5 md:p-7 lg:p-40">
              <Image
                src="/dashboard.webp"
                alt="hero"
                layout="responsive"
                width={200}
                height={200}
              />
            </div>
            <p className="mt-5 text-responsive-xs text-clrnavbar">
              Powering the world’s best teams
            </p>
            <div className="size-full">
              <Marquee className="[--duration:20s]">
                <SvgImg className="size-16 s:size-32" />
                <VitalSvg className="mt-4 size-16 s:size-24" fill="#B9BBC1" />
                <HarmonySvg className="size-24 s:size-32" />
                <ElasticSvg className="size-24 s:size-32" fill="#B9BBC1" />
                <TerraSvg className="mt-4 size-16 s:size-24" />
                <SageSvg className="mt-4 size-16 s:size-24" />
                <EchoSvg className="mt-4 size-16 s:size-24" />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 w-full">
        <p className="my-10 whitespace-pre-line text-center text-4xl leading-tight tracking-tighter text-clrtitle">
          Works for you,{"\n"}not against.
        </p>
        <p className="-mt-10 text-center text-xl text-clrnavbar">
          Investing plans that meet all your needs.
        </p>
      </div>

      <div className="flex size-full flex-1 flex-col gap-4 xl:flex-row">
        {/* Brokerage Account */}
        <motion.div
          className="flex size-full min-h-[464px] grow flex-col rounded-lg bg-colored text-clrtitle md:pl-10"
          variants={boxVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          ref={ref}
        >
          <div className="relative flex flex-col rounded-lg bg-colored pl-4">
            <p className="mb-2 mt-4 max-w-fit rounded-2xl bg-bgtext px-4 py-1 text-xs text-clrtitle">
              Brokerage Account
            </p>
            <h1 className="text-lg text-clrtitle">
              General Investing General Investing
            </h1>
            <p className="text-sm text-clrnavbar md:whitespace-pre-line">
              We offer investment options from stocks to real,{"\n"} estate
              allowing you to grow your wealth efficiently.
            </p>
            <div className="container relative mt-36 flex w-full items-center justify-center s:px-1">
              <div className="z-30 flex w-2/4 shrink items-center justify-between gap-4 rounded-lg bg-white px-2 py-5 shadow-md s:flex-col xs:flex-row">
                <div className="flex flex-col">
                  <p className="text-xs text-clrtitle s:text-[9px]">
                    General Investing Account
                  </p>
                  <p className="text-xs text-clrnavbar s:text-[9px]">
                    USD Account (...3654)
                  </p>
                </div>

                <div className="flex h-6 w-auto rounded-lg bg-bgtext">
                  <AnimatePresence mode="wait">
                    {status === "deposit" && (
                      <motion.div
                        key="deposit"
                        className="flex h-6 items-center justify-center rounded-lg px-2"
                        initial={{ opacity: 0, width: "auto" }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: "auto" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="whitespace-nowrap text-xs leading-tight tracking-tight s:text-[9px]">
                          Deposit
                        </p>
                      </motion.div>
                    )}
                    {status === "depositing" && (
                      <motion.div
                        key="depositing"
                        className="flex h-6 items-center justify-center rounded-lg bg-colorgreen px-2 text-white"
                        initial={{ opacity: 0, y: -10, width: "auto" }}
                        animate={{ opacity: 1, y: 0, width: "auto" }}
                        exit={{ opacity: 0, y: 10, width: "auto" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="whitespace-nowrap text-xs leading-tight tracking-tight s:text-[9px]">
                          Depositing
                        </p>
                      </motion.div>
                    )}
                    {status === "successful" && (
                      <motion.div
                        key="successful"
                        className="flex h-6 items-center justify-center rounded-lg bg-colorgreen px-2 text-white"
                        initial={{ opacity: 0, y: -10, width: "auto" }}
                        animate={{ opacity: 1, y: 0, width: "auto" }}
                        exit={{ opacity: 0, y: 0, width: "auto" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="whitespace-nowrap text-xs leading-tight tracking-tight s:text-[9px]">
                          Deposit Successful
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="absolute left-1/2 top-[70%] z-20 w-[45%] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white p-2 shadow-md s:top-[97%] md:top-full lg:top-[103%]" />
              <div className="absolute left-1/2 top-full z-10 w-2/5 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white p-2 shadow-md s:top-full xs:top-[103%] md:top-[110%] lg:top-[117%]" />
            </div>
          </div>
        </motion.div>

        {/* IRA Account */}
        <motion.div
          className="flex size-full min-h-[464px] grow flex-col rounded-lg bg-colored pl-4 text-clrtitle md:pl-10"
          variants={secondVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          ref={ref}
        >
          <div className="container flex flex-col items-start">
            <p className="mb-2 mt-4 max-w-fit rounded-2xl bg-bgtext px-4 py-1 text-xs text-clrtitle">
              IRA Account
            </p>
            <h1 className="text-lg text-clrtitle">Retirement Investing</h1>
            <p className="text-sm text-clrnavbar md:whitespace-pre-line">
              Save and invest for your retirement years, ensuring a{"\n"}
              comfortable lifestyle when you stop working.
            </p>
          </div>
          <div className="flex size-full shrink items-center justify-center">
            <TinyBarChart />
          </div>
        </motion.div>
      </div>
      {/* Divider  */}
      <div className="mt-16 h-[0.1px] w-full bg-[#546c4c]" />
      {/* Investment Types */}
      <h1 className="container mt-10 whitespace-pre-line text-xl text-clrtitle">
        Trinity offers a range of investment types that{"\n"} suit your
        retirement goals.
      </h1>
      <div className="container mt-10 flex size-full flex-col gap-6 xl:flex-row">
        <div className="flex size-full h-28 gap-4">
          <div className="h-full w-[0.1px] bg-[#546c4c]" />
          <div className="flex size-full flex-col justify-end">
            <GoalSvg />
            <h2 className="mt-2 font-medium text-clrtitle s:text-[14px] md:text-[16px]">
              Goal-based Planning
            </h2>
            <p className="mt-3 text-[14px] text-clrparagraph s:text-[11px] md:text-[14px]">
              Save and invest for your retirement years, ensuring a{"\n"}
              comfortable lifestyle when you stop working.
            </p>
          </div>
        </div>
        <div className="flex size-full h-28 gap-4">
          <div className="h-full w-[0.1px] bg-[#546c4c]" />
          <div className="flex size-full flex-col justify-end">
            <CandelstSvg />
            <h2 className="mt-2 font-medium text-clrtitle s:text-[14px] md:text-[16px]">
              Automated Rebalancing
            </h2>
            <p className="mt-3 text-[14px] text-clrparagraph s:text-[11px] md:text-[14px]">
              Save and invest for your retirement years, ensuring a{"\n"}
              comfortable lifestyle when you stop working.
            </p>
          </div>
        </div>
        <div className="flex size-full h-28 gap-4">
          <div className="h-full w-[0.1px] bg-[#546c4c]" />
          <div className="flex size-full flex-col justify-end">
            <ChartSvg />
            <h2 className="mt-2 font-medium text-clrtitle s:text-[14px] md:text-[16px]">
              Retirement Income Projections
            </h2>
            <p className="mt-3 text-[14px] text-clrparagraph s:text-[11px] md:text-[14px]">
              Save and invest for your retirement years, ensuring a{"\n"}
              comfortable lifestyle when you stop working.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
