"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FedEx,
  WixSvg,
  UpsSvg,
  GachaClub,
  NetflixSvg,
  DockerSvg,
  ChartSvg,
  CandelstSvg,
  GoalSvg,
} from "@/app/svg/SvgIcons";
import TinyBarChart from "./components/TinyBartChart";
import Button from "./components/Button";
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

  return (
    <div className="container my-5">
      <div className="flex items-center justify-center rounded-2xl bg-colored">
        <div className="flex size-full flex-col p-2">
          <div className="mt-10 flex size-full flex-col items-center justify-center px-2 text-clrtitle md:px-10">
            <h1 className="text-center text-responsive-md">
              Retirement investing made simple
            </h1>
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
            <div className="mt-5 flex w-full items-center justify-between gap-2">
              <FedEx />
              <WixSvg />
              <UpsSvg />
              <GachaClub />
              <NetflixSvg />
              <DockerSvg />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="my-10 whitespace-pre-line text-center text-responsive-md uppercase leading-tight tracking-tighter text-clrtitle">
          Works for you,{"\n"}not against.
        </p>
        <p className="-mt-10 text-center text-responsive-sm text-clrnavbar">
          Investing plans that meet all your needs.
        </p>
      </div>
      <div className="flex size-full flex-col gap-4 xl:flex-row">
        {/* Brokerage Account */}
        <div className="flex size-full min-h-[464px] flex-grow flex-col rounded-lg bg-colored pl-4 text-clrtitle md:pl-10">
          <div className="relative flex flex-col rounded-lg bg-colored pl-4 md:pl-10">
            <p className="mb-2 mt-4 max-w-fit rounded-2xl bg-bgtext px-4 py-1 text-xs text-clrtitle">
              Brokerage Account
            </p>
            <h1 className="text-responsive-sm text-clrtitle">
              General Investing General Investing
            </h1>
            <p className="text-responsive-xs text-clrnavbar md:whitespace-pre-line">
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
                  {status === "deposit" && (
                    <h1 className="self-center px-2 text-xs leading-tight tracking-tight s:text-[9px]">
                      Deposit
                    </h1>
                  )}
                  <AnimatePresence>
                    {status === "depositing" && (
                      <motion.div
                        className="mx-auto flex h-6 items-center justify-center rounded-lg bg-colorgreen px-2 text-xs text-white"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <p className="text-xs leading-tight tracking-tight s:text-[9px]">
                          Depositing
                        </p>
                      </motion.div>
                    )}
                    {status === "successful" && (
                      <motion.div
                        className="mx-auto flex h-6 items-center justify-center rounded-lg bg-colorgreen px-2 text-xs text-white"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <p className="text-xs leading-tight tracking-tight s:text-[9px]">
                          Deposit Successful
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="absolute left-1/2 top-[70%] z-20 w-[45%] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white p-2 shadow-md s:top-[97%] md:top-[100%] lg:top-[103%]" />
              <div className="absolute left-1/2 top-[100%] z-10 w-[40%] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white p-2 shadow-md md:top-[117%] lg:top-[108%]" />
            </div>
          </div>
        </div>

        {/* IRA Account */}
        <div className="flex size-full min-h-[464px] flex-grow flex-col rounded-lg bg-colored pl-4 text-clrtitle md:pl-10">
          <div className="container flex flex-col items-start">
            <p className="mb-2 mt-4 max-w-fit rounded-2xl bg-bgtext px-4 py-1 text-xs text-clrtitle">
              IRA Account
            </p>
            <h1 className="text-responsive-sm text-clrtitle">
              Retirement Investing
            </h1>
            <p className="text-responsive-xs text-clrnavbar md:whitespace-pre-line">
              Save and invest for your retirement years, ensuring a{"\n"}
              comfortable lifestyle when you stop working.
            </p>
          </div>
          <div className="flex size-full shrink items-center justify-center">
            <TinyBarChart />
          </div>
        </div>
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
