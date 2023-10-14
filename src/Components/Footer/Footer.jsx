import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContents">
        <h2 className="Logo">Furns</h2>
        <div className="footerLinks">
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Furniture Store</a>
          </li>
          <li>
            <a href="#">Interior Design</a>
          </li>
          <li>
            <a href="#">Ceramics</a>
          </li>
          <li>
            <a href="#">Decorations</a>
          </li>
        </div>
        <div className="footerLinks">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </div>
        <div>
          <h4>Subscribe to our newsletter</h4>
          <input type="text" placeholder="Email address" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
