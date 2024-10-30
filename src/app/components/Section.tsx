import React from "react";
import Faq from "./components/Faq";

const Section = () => {
  return (
    <div className="container">
      <div className="mt-16 flex size-full min-h-[500px] flex-1 flex-col items-start justify-center gap-4 rounded-xl bg-colored p-4 xl:flex-row">
        <div className="mt-10 flex size-full flex-col items-start">
          <h2 className="mb-5 text-xl font-medium text-clrtitle">
            Questions & Answers
          </h2>
          <p className="whitespace-pre-line text-clrparagraph">
            Learn more about what Trinity has to offer or {"\n"}feel free to
            contact us at support@trinity.com
          </p>
        </div>
        <div className="mt-10">
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default Section;
