import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContents">
        <h2 className="Logo">
          <Link to={'/'}>
            Furns
          </Link>
        </h2>
        <div className="footerLinks">
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/shop"}>Fashion Store</Link>
          </li>
          <li>
            <Link to={'/shop'}>
              Unique Designs
            </Link>
          </li>
          <li>
            <Link to={'/shop'}>
              CLassic Wears
            </Link>
          </li>
          <li>
            <Link to={'/shop'}>
              Inspiring Wears
            </Link>
          </li>
        </div>
        <div className="footerLinks">
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contacts"}>Contact us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
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
