import React from "react";
import {
  ArrowUpSvg,
  CashSvg,
  CandeltSvg,
  TriangleSvg,
  SemiCircleSvg,
  SquareSvg,
  ChartGraphSvg,
} from "../svg/SvgIcons";
import BrokerageAccount from "./components/BrokerageAccount";
import CustomizableDashboard from "./components/CustomizableDashboard";
const Main = () => {
  return (
    <div className="mt-14 w-dvw bg-colored">
      <div className="container mb-16 flex flex-col">
        {/* Brokerage Account */}
        <BrokerageAccount />
        {/* Customizable Dashboard */}
        <CustomizableDashboard />
        {/* Real-Time Alerts & Notifications */}
        <div className="container mt-16 flex size-full shrink flex-col gap-10 xl:flex-row">
          <div className="relative overflow-hidden rounded-2xl bg-white s:px-6 xl:w-1/2">
            <div className="absolute left-0 top-0 z-0 flex flex-col items-start justify-center">
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
              <div className="flex">
                <SquareSvg />
                <SquareSvg />
                <SquareSvg />
              </div>
            </div>
            <div className="relative z-10 mx-auto my-10 flex w-full max-w-screen-xs flex-col items-start justify-center overflow-hidden rounded-2xl bg-colored p-4 s:p-2 sm:p-6">
              <div className="flex w-full flex-col">
                {/* Header */}
                <div className="mb-4">
                  <h2 className="text-sm font-medium">Brokerage Account</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold sm:text-xl">
                      $12,650.27
                    </span>
                    <span className="text-xs text-green-500 sm:text-sm">
                      $201.28 (+12.3%)
                    </span>
                  </div>
                </div>

                {/* Chart Container */}
                <div className="relative h-[200px] w-full sm:h-[250px] md:h-[300px]">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 flex h-full flex-col justify-between text-[10px] text-gray-500 sm:text-xs">
                    <span>1000</span>
                    <span>750</span>
                    <span>500</span>
                    <span>250</span>
                    <span>0</span>
                  </div>

                  {/* Chart Area */}
                  <div className="ml-8 h-full w-[calc(100%-2rem)] sm:ml-10 sm:w-[calc(100%-2.5rem)]">
                    <ChartGraphSvg className="size-full" />
                  </div>

                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[8px] text-gray-500 sm:left-10 sm:text-xs">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start xl:w-1/2">
            <h1 className="mb-5 text-xl font-medium text-clrtitle">
              Real-Time Alerts & Notifications
            </h1>
            <p className="text-clrparagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              facilisis nulla. Fusce tincidunt ornare purus eget hendrerit.
              Integer viverra nisl viverra mi placerat, a vestibulum justo
              consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
