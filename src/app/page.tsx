import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
import Article from "./components/Article";
import Section from "./components/Section";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div className="w-md sm:w-xl md:w-3xl lg:w-4xl xl:w-5xl 2xl:w-6xl container flex size-full flex-col items-center justify-center p-5">
      <NavBar />
      <Header />
      <Main />
      <Article />
      <Section />
      <Footer />
    </div>
  );
};

export default page;
