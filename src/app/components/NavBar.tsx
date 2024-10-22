import React from "react";
import { LogoNav } from "@/app/svg/SvgIcons";

const NavBar = () => {
  return (
    <div className="container">
      <div className="size-full">
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <div>
            <LogoNav />
          </div>
          <div className="flex items-center justify-between gap-4">
            <p>Investment</p>
            <p>Features</p>
            <p>Faq</p>
          </div>
          <div>Log In</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
