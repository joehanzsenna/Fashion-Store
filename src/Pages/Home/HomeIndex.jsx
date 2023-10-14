import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Hero from "./HomeComponents/Hero/Hero";
import Furns from "./HomeComponents/Furns/Furns";
import AboutHero from "../About/AboutComponents/AboutHero/AboutHero";
import Products from "./HomeComponents/Products/Products";

const HomeIndex = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Furns />
      <Products/>
      <AboutHero/>
      <Footer />
    </div>
  );
};

export default HomeIndex;
