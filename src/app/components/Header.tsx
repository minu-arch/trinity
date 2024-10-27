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
} from "@/app/svg/SvgIcons";
import TinyBarChart from "./components/TinyBartChart";
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
            <button className="mt-5 rounded-md border border-b-4 border-neutral-500 bg-neutral-200 px-2 py-1 text-[.8rem] font-bold text-green-700">
              Get Started
            </button>
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
        <div className="relative flex size-full h-full min-h-[464px] flex-col">
          <div className="relative flex flex-grow flex-col rounded-lg bg-colored pl-4 md:pl-10">
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
            <div className="container relative my-10 flex w-full items-center justify-center px-10 s:px-1">
              <div className="z-30 flex w-2/4 shrink items-center justify-between gap-4 rounded-lg bg-white px-2 py-5 s:flex-col xs:flex-row">
                <div className="flex flex-col">
                  <p className="text-xs text-clrtitle s:text-[9px]">
                    General Investing Account
                  </p>
                  <p className="text-xs text-clrnavbar s:text-[9px]">
                    USD Account (...3654)
                  </p>
                </div>

                <div className="flex h-6 w-auto rounded-lg bg-bgtext">
                  <div className="flex h-6 items-center rounded-lg bg-bgtext">
                    {status === "deposit" && (
                      <h1 className="px-2 text-xs leading-tight tracking-tight s:text-[9px]">
                        Deposit
                      </h1>
                    )}
                  </div>
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
              <div className="xxl:top-[74%] absolute left-1/2 top-[73%] z-10 w-[70%] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white p-2 shadow-sm md:top-[75%]"></div>
              <div className="absolute left-1/2 top-[70%] z-20 w-[75%] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white p-2 shadow-sm md:top-[72%] lg:top-[72%]"></div>
            </div>
          </div>
        </div>

        {/* IRA Account */}
        <div className="flex size-full min-h-[464px] flex-grow flex-col rounded-lg bg-colored pl-4 text-clrtitle md:pl-10">
          <div className="flex flex-col items-start">
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
    </div>
  );
};

export default Header;
