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

const Main = () => {
  return (
    <div className="mt-14 w-dvw bg-colored">
      <div className="container mb-16 flex flex-col">
        <div className="container mt-16 flex size-full shrink flex-col gap-10 xl:flex-row">
          <div className="relative overflow-hidden rounded-2xl bg-white s:px-6 xl:w-1/2">
            <div className="absolute right-0 top-0 z-0">
              <TriangleSvg />
            </div>
            <div className="relative z-10 mx-auto mt-20 flex max-w-screen-s shrink flex-col items-start justify-center rounded-t-2xl bg-colored p-4">
              <h2>Brokerage Account</h2>
              {/* Account Balance */}
              <div className="mt-2 flex items-center justify-center">
                <div className="flex items-center justify-center gap-4">
                  <h2 className="">$12,650.27</h2>
                  <ArrowUpSvg className="rotate-arrow size-4 self-start" />
                  <p className="self-start text-xs font-medium text-clrparagraph">
                    $201.28 (+12.3%)
                  </p>
                </div>
              </div>
              {/* Account Details */}
              <div className="mt-5 flex size-full items-start gap-4">
                <div className="self-center">
                  <CandeltSvg className="size-10" />
                </div>
                <div className="flex size-full items-start justify-between">
                  <div className="flex flex-col items-start justify-between">
                    <h2 className="text-[11px] font-semibold">
                      USD Account (...4231)
                    </h2>
                    <p className="text-[9px] font-medium text-gray-600">
                      Brokerage
                    </p>
                  </div>
                  <div className="hidden flex-col items-start justify-center md:flex">
                    <h2 className="text-[11px] font-semibold">$10,876.27</h2>
                    <p className="self-end text-[9px] font-medium text-clrparagraph">
                      Now
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 h-[1px] w-full bg-gray-300" />
              <div className="mt-5 flex size-full items-start gap-4">
                <div className="self-center">
                  <CashSvg className="size-10" />
                </div>
                <div className="flex size-full items-start justify-between">
                  <div className="flex flex-col items-start justify-between">
                    <h2 className="text-[11px] font-semibold">
                      USD Account (...4231)
                    </h2>
                    <p className="text-[9px] font-medium text-gray-600">
                      Brokerage
                    </p>
                  </div>
                  <div className="hidden flex-col items-start justify-center md:flex">
                    <h2 className="text-[11px] font-semibold">$987.00</h2>
                    <p className="self-end text-[9px] font-medium text-clrparagraph">
                      Now
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 h-[1px] w-full bg-gray-300" />
              <div className="mt-5 flex size-full items-start gap-4">
                <div className="self-center">
                  <CashSvg className="size-10" />
                </div>
                <div className="flex size-full items-start justify-between">
                  <div className="flex flex-col items-start justify-between">
                    <h2 className="text-[11px] font-semibold">
                      USD Account (...4231)
                    </h2>
                    <p className="text-[9px] font-medium text-gray-600">
                      Brokerage
                    </p>
                  </div>
                  <div className="hidden flex-col items-start justify-center md:flex">
                    <h2 className="text-[11px] font-semibold">$601.00</h2>
                    <p className="text-[9px] font-medium text-clrparagraph">
                      1 day ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 h-[1px] w-full bg-gray-300" />
              <div className="mt-5 flex size-full items-start gap-4">
                <div className="self-center">
                  <CashSvg className="size-10" />
                </div>
                <div className="flex size-full items-start justify-between">
                  <div className="flex flex-col items-start justify-between">
                    <h2 className="text-[11px] font-semibold">
                      USD Account (...4231)
                    </h2>
                    <p className="text-[9px] font-medium text-gray-600">
                      Brokerage
                    </p>
                  </div>
                  <div className="hidden flex-col items-start justify-center md:flex">
                    <h2 className="text-[11px] font-semibold">$214.00</h2>
                    <p className="text-[9px] font-medium text-clrparagraph">
                      1 day ago
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
          </div>
          <div className="flex flex-col justify-start xl:w-1/2">
            <h1 className="mb-5 text-xl font-medium text-clrtitle">
              One-click Transactions
            </h1>
            <p className="text-clrparagraph">
              Trinity`s platform streamlines the investment process with
              one-click transactions, allowing users to execute trades and
              transactions quickly and efficiently. Whether buying stocks,
              adjusting asset allocations, or making contributions to retirement
              accounts.
            </p>
          </div>
        </div>
        <div className="container mt-16 flex size-full shrink flex-col gap-10 xl:flex-row">
          <div className="relative overflow-hidden rounded-2xl bg-white s:px-6 xl:w-1/2">
            <div className="absolute right-0 top-20 z-0 size-full">
              <SemiCircleSvg />
            </div>
            {/* Customizable Dashboard */}
            <div className="z-10 mx-auto mt-20 flex shrink translate-x-10 flex-col items-start justify-center rounded-t-2xl bg-colored p-4 s:translate-y-24 xs:translate-y-10 md:max-w-screen-md md:translate-x-36 lg:translate-x-56">
              {/* Summary */}
              <div className="flex size-full flex-col gap-4">
                <div className="flex size-full flex-1 flex-row gap-4">
                  <div className="flex size-full flex-col items-start justify-center rounded-md bg-white p-6 s:min-h-[361px] xs:min-h-[321px] lg:min-h-[321px] xl:min-h-[321px]">
                    <h2 className="text-[.8rem] font-medium">Summary</h2>
                    <div className="mt-6 flex size-full items-center justify-between">
                      <h3 className="text-[.6rem] font-medium">Total Value</h3>
                      <p className="text-[.6rem] font-medium">$12,650.27</p>
                    </div>
                    <div className="my-3 flex h-2 w-full">
                      <div className="h-full w-[30%] rounded-l-full bg-[#decf99]"></div>
                      <div className="h-full w-[70%] rounded-r-full bg-clrnavbar"></div>
                    </div>
                    <div className="mb-4 flex size-full items-center justify-between">
                      <div className="flex items-center justify-center gap-2">
                        <div className="size-2 rounded-full bg-blue-600" />
                        <h2 className="text-[.6rem] font-medium">Cash</h2>
                      </div>
                      <h2 className="text-[.6rem] font-medium">30%</h2>
                    </div>
                    <div className="mb-4 flex size-full items-center justify-between">
                      <div className="flex items-center justify-center gap-2">
                        <div className="size-2 rounded-full bg-green-600" />
                        <h2 className="text-[.6rem] font-medium">
                          Investments
                        </h2>
                      </div>
                      <h2 className="text-[.6rem] font-medium">70%</h2>
                    </div>
                    <div className="flex size-full items-center justify-between">
                      <div className="flex items-center justify-center gap-2">
                        <div className="size-2 rounded-full bg-sky-800" />
                        <h2 className="text-[.6rem] font-medium">Debt</h2>
                      </div>
                      <h2 className="text-[.6rem] font-medium">0%</h2>
                    </div>

                    <div className="mt-5 h-[1px] w-full bg-gray-300" />
                    <div className="mt-5 flex size-full items-center justify-between">
                      <h2 className="text-[.6rem] font-medium">Day Change</h2>
                      <h2 className="text-[.6rem] font-medium text-green-500">
                        +$135.50 (0.50%)
                      </h2>
                    </div>
                    <button className="mt-5 w-full cursor-text rounded-md border-[.5px] border-gray-400 bg-transparent p-2 text-[.6rem] font-medium text-gray-500">
                      View Statements
                    </button>
                  </div>
                  <div className="size-full min-h-[361px] flex-col items-start justify-center rounded-md bg-white p-6 s:hidden s:min-h-[361px] xs:min-h-[321px] md:flex lg:min-h-[321px] xl:min-h-[321px]" />
                </div>
                <div className="flex size-full flex-row gap-4">
                  <div className="flex size-full flex-col items-start justify-center rounded-md bg-white p-6" />
                  <div className="flex size-full flex-col items-start justify-center rounded-md bg-white p-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start xl:w-1/2">
            <h1 className="mb-5 text-xl font-medium text-clrtitle">
              Customizable Dashboard
            </h1>
            <p className="text-clrparagraph">
              Trinity's platform offers a customizable dashboard that allows
              users to personalize their experience based on their preferences
              and priorities. Users can rearrange widgets, add or remove
              modules, and tailor the dashboard layout to suit their individual
              needs.
            </p>
          </div>
        </div>
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
                    <ChartGraphSvg className="h-full w-full" />
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
