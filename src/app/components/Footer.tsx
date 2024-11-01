import React from "react";
import { ArrowUpSvg, LinkedinSvg, LogoNav, XtwitterSvg } from "../svg/SvgIcons";
import { Input } from "@/components/ui/input";
import BtnFixed from "./components/BtnFixed";

const Footer = () => {
  return (
    <div className="w-dvw bg-colored">
      <div className="container mx-auto flex size-full flex-col items-center justify-center">
        <div className="mt-16 flex size-full flex-1 flex-col items-start justify-between gap-10 md:flex-row">
          <div className="flex flex-col items-start">
            <div className="flex gap-2">
              <LogoNav />
              <h1 className="text-xl font-medium">Trinity Financial</h1>
            </div>
            <p className="text-[.8rem] text-clrparagraph">
              Finance Template for Framer
            </p>
          </div>
          <div className="relative flex max-w-sm flex-col items-start justify-center">
            <div className="relative w-full">
              <Input
                placeholder="name@email.com"
                className="rounded-full border-none bg-white pr-10 focus:border-none"
              />
              <ArrowUpSvg className="absolute right-2 top-1/2 size-4 -translate-y-1/2" />
            </div>
            <p className="text-left text-[.8rem] font-normal text-clrparagraph">
              By subscribing you agree to with our Privacy Policy and agree to
              receive updates from our company. No spam ever.
            </p>
          </div>
        </div>
        <div className="my-5 h-[.5px] w-full bg-clrparagraph" />
        <div className="mb-5 flex size-full flex-col items-center justify-between gap-2 md:flex-row">
          <p>2024 Trinity Financial. All Rights Reserved</p>
          <p className="flex items-center gap-2">
            Need a custom website?
            <ArrowUpSvg className="size-4" />
            <span>Get in touch</span>
          </p>
          <div className="flex items-center gap-2">
            <LinkedinSvg />
            <XtwitterSvg />
          </div>
        </div>
      </div>
      <BtnFixed />
    </div>
  );
};

export default Footer;
