import React, { useState } from "react";
import "./Navbar.css";
// import menuIcon00 from "../../assets/menuIcon.png";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState("navMenu");

  function menuClick() {
    if (navMenu === "navMenu") {
      setNavMenu("navMenu navActive");
    } else {
      setNavMenu("navMenu");
    }
  }

  return (
    <div className="navbarContainer">
      <nav className="navbar">
        {/* logo  */}

        <h1 className="furnsLogo">
          <Link to={"/"}>Furns</Link>
        </h1>

        {/* lists / buttons  */}
        <div className={navMenu}>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
            <li>
              <Link to={"/contacts"}>Contacts</Link>
            </li>
          </ul>
          <div className="buttons">
            <Link to={"./contacts"}>
              <button className="navBtn01">Log In</button>
            </Link>
            <Link to={"/contacts"}>
              <button className="navBtn02">Signup</button>
            </Link>
          </div>
        </div>
        <CiMenuFries onClick={menuClick} className="menuIcon" />
        {/* <img src={menuIcon00} alt="" /> */}
      </nav>
    </div>
  );
};

export default Navbar;
