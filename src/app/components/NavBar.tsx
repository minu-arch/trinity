"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LogoNav } from "@/app/svg/SvgIcons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="text-clrnavbar mt-5 size-full">
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <div>
            <LogoNav />
          </div>

          <div className="hidden items-center justify-between gap-4 md:flex">
            <p>Investment</p>
            <p>Features</p>
            <p>Faq</p>
          </div>
          <p className="hidden md:block">Log In</p>

          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 flex h-screen flex-col items-start gap-2 md:hidden">
            <p>Investment</p>
            <p>Features</p>
            <p>Faq</p>
            <p>Log In</p>
            <button className="rounded-md border border-b-4 border-neutral-500 bg-neutral-200 px-6 py-1">
              My Template
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
