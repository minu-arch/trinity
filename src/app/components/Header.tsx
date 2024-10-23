import React from "react";
import Image from "next/image";
import {
  FedEx,
  WixSvg,
  UpsSvg,
  GachaClub,
  NetflixSvg,
  DockerSvg,
} from "@/app/svg/SvgIcons";

const Header = () => {
  return (
    <div className="container my-5">
      <div className="flex items-center justify-center rounded-2xl bg-colored">
        <div className="flex size-full flex-col p-2">
          <div className="mt-10 flex size-full flex-col items-center justify-center p-5 text-clrtitle">
            <h1 className="text-center text-responsive-sm">
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
            <div className="my-5 flex size-full h-2/4 w-full items-center justify-center rounded-xl bg-[#546c4c] p-4 s:p-2 xs:p-5 md:p-7 lg:p-12">
              <Image
                src="/dashboard.webp"
                alt="hero"
                layout="responsive"
                width={500}
                height={500}
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
        <p className="my-10 whitespace-pre-line text-center text-responsive-sm uppercase leading-tight tracking-tighter text-clrtitle">
          Works for you,{"\n"}not against.
        </p>
        <p className="-mt-10 text-center text-responsive-xs text-clrnavbar">
          Investing plans that meet all your needs.
        </p>
      </div>
    </div>
  );
};

export default Header;
