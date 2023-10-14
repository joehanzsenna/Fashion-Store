import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ShopProducts from "./ShopComponents/ShopProducts/ShopProducts";

const ShopIndex = () => {
  return <div>
    <Navbar/>
    <ShopProducts/>
    <Footer/>
  </div>;
};

export default ShopIndex;
