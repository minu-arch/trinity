import { NextJsSvg } from "@/app/svg/SvgIcons";
import Link from "next/link";
import React from "react";

const BtnFixed = () => {
  return (
    <Link
      href="https://minumzu.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="fixed bottom-0 right-0 z-50 m-5 flex items-center gap-2 rounded-xl bg-white p-3 shadow-md hover:bg-neutral-300">
        <NextJsSvg />
        Made in <span className="font-bold">NextJs</span>
      </button>
    </Link>
  );
};

export default BtnFixed;
