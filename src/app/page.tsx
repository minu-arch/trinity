import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
import Article from "./components/Article";
import Section from "./components/Section";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center px-5">
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
