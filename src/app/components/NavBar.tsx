"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LogoNav } from "@/app/svg/SvgIcons";
import Button from "./components/Button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="mt-5 size-full text-clrnavbar">
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
            <Button className="mt-1">My Template</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
