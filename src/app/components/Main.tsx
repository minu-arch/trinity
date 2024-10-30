import React from "react";
import {
  ArrowUpSvg,
  CashSvg,
  CandeltSvg,
  TriangleSvg,
  SemiCircleSvg,
  SquareSvg,
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
              Trinity's platform streamlines the investment process with
              one-click transactions, allowing users to execute trades and
              transactions quickly and efficiently. Whether buying stocks,
              adjusting asset allocations, or making contributions to retirement
              accounts.
            </p>
          </div>
        </div>
        <div className="container mt-16 flex size-full shrink flex-col gap-10 xl:flex-row">
          <div className="relative rounded-2xl bg-white s:px-6 xl:w-1/2">
            <div className="image-rendering-pixelated absolute right-0 top-0 z-0">
              <SemiCircleSvg className="size-2/3" />
            </div>
            <div className="relative z-10 mx-auto mt-20 flex max-w-screen-s shrink flex-col items-start justify-center rounded-t-2xl bg-colored p-4">
              <h2>Portfolio</h2>
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
            <div className="absolute bottom-0 left-0 z-0 flex flex-col items-start justify-center">
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
            <div className="relative z-10 mx-auto mt-20 flex max-w-screen-s shrink flex-col items-start justify-center rounded-t-2xl bg-colored p-4">
              <h2>Portfolio</h2>
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
