import React from "react";
import {
  ElasticSvg,
  AcmeSvg,
  VitalSvg,
  BankSvg,
  LogoNav,
  FramerSvg,
} from "../svg/SvgIcons";

const Article = () => {
  return (
    <div className="my-5">
      <div className="container">
        {/* The Community */}
        <div className="container mt-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-medium text-clrtitle">
            Hear it from the community
          </h1>
          <p className="text-lg text-clrparagraph">
            Investing plans that meet all your needs.
          </p>
        </div>
        <div className="mt-16 flex size-full flex-col gap-4 xl:flex-row">
          <div className="flex flex-1 flex-col items-start justify-center rounded-xl bg-colored p-4">
            <div className="self-start">
              <ElasticSvg />
            </div>
            <div className="mt-10 flex flex-col justify-center">
              <h2>"Its the greatest investment we've made in our employees"</h2>
              <p>
                By integrating Trinity into our benefits package, our team has
                gained invaluable tools for managing their finances and planning
                for the future. Not only does Trinity offer a user-friendly
                platform with intuitive features, but their commitment to
                security and personalized guidance has earned our trust.
              </p>
            </div>

            <div className="mb-5 mt-20 flex flex-col items-start justify-center">
              <h2 className="text-lg font-medium">John Doe</h2>
              <p className="text-sm text-clrparagraph">
                Chief Operating Officer at Elastic AI
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-1 flex-col items-start justify-between rounded-xl bg-acmeinc p-4">
              <AcmeSvg className="mt-5" />
              <h2>Acme employees saved an average of 20% more with Trinity</h2>
            </div>
            <div className="flex flex-1 flex-col items-start justify-between rounded-xl bg-acmeinc p-4">
              <VitalSvg className="mt-5 pr-6" />
              <h2>
                Partnering with Vital, Trinity helped employees save over $2
                million directly from their paycheck.
              </h2>
            </div>
          </div>
        </div>
        {/* The Community End */}

        {/* Connect to bank */}
        <div className="mt-16 flex size-full h-[500px] flex-col gap-4 overflow-hidden rounded-xl bg-colored p-4">
          <div className="relative my-10 flex size-full flex-1 flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="flex flex-col justify-center lg:w-1/2">
              <h2 className="mb-10 self-start text-xl font-medium text-clrtitle">
                Connect directly to your bank
              </h2>
              <p className="text-clrparagraph">
                Sync your bank accounts safely and securely, allowing you to
                gain a comprehensive overview of your finances in one convenient
                location.
              </p>
            </div>
            <div className="hidden items-center justify-between gap-4 lg:flex">
              <div className="flex flex-col items-center justify-center gap-4">
                <FramerSvg />
                <FramerSvg />
                <FramerSvg />
                <FramerSvg />
                <FramerSvg />
                <FramerSvg />
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <FramerSvg />
                <FramerSvg />
                <FramerSvg />
                <FramerSvg />
                <FramerSvg />
                <FramerSvg />
              </div>
            </div>
            <div className="xl:top-50 absolute bottom-0 flex justify-between gap-4 rounded-xl bg-white p-4 lg:hidden xl:bottom-52 xl:right-0 xl:flex">
              <div className="flex flex-col items-start justify-center">
                <LogoNav className="size-5" />
                <h2 className="text-md font-medium">Connect to bank</h2>
                <p className="text-sm text-clrparagraph">
                  Connect to 500+ supported banks.
                </p>
              </div>

              <div className="flex items-center justify-center rounded-md border border-dashed border-neutral-500 bg-colored p-4">
                <BankSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
