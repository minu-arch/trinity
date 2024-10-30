import React from "react";
import Faq from "./components/Faq";
import Button from "./components/Button";
import Image from "next/image";
const Section = () => {
  return (
    <div className="container mb-16">
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
      {/* Trinity Financial */}
      <div className="mt-16 flex size-full flex-1 flex-col gap-4 xl:flex-row">
        <div className="flex min-h-[500px] w-full flex-col items-start gap-10 rounded-xl bg-colored p-4">
          <h1 className="mt-24 whitespace-pre-line text-3xl font-medium text-clrtitle">
            Start investing with{"\n"} Trinity Financial Today
          </h1>
          <div className="mt-16 flex flex-col items-start gap-4">
            <Button>Purchase Template</Button>
            <p className="text-clrparagraph md:whitespace-pre-line">
              We offer a variety of flexible services that cater to all{"\n"}{" "}
              types of needs and wants.
            </p>
          </div>
        </div>
        <div className="flex min-h-[500px] w-full items-center justify-center rounded-xl bg-colorgreen p-4">
          <Image
            src="/dashboard.webp"
            alt="trinity"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
