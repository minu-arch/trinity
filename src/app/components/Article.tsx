import React from "react";

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
        <div className="flex flex-col items-center justify-center gap-4 xl:flex-row">
          <div>Elastic</div>
          <div className="flex shrink flex-col gap-4">
            <div>Acme</div>
            <div>Vital</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
