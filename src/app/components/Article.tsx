import React from "react";
import { ElasticSvg, AcmeSvg, VitalSvg } from "../svg/SvgIcons";

const Article = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="mt-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-medium text-clrtitle">
            Hear it from the community
          </h1>
          <p className="text-lg text-clrparagraph">
            Investing plans that meet all your needs.
          </p>
        </div>
        <div className="container mt-16 flex size-full flex-col gap-4 xl:flex-row">
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
      </div>
    </div>
  );
};

export default Article;
