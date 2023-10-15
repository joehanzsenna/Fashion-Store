import React from "react";
import "./Furns.css";
import img2 from "../../../../assets/FashionImg.jpg";
import { Link } from "react-router-dom";

const Furns = () => {
  return (
    <div className="furnsContainer">
      <div className="furns">
        <div className="furns-text">
          <h5 className="furns-color">Furns</h5>
          <h2>
            FULL-FLEDGED <br /> FASHION STORE <br /> & INTERIOR DESIGN
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
            elit purus aliquam varius fusce. Proin viverra pharetra, iaculis id
            morbi tempus ut. Vel nibh vitae rutrum lorem eu turpis tempor.
          </p>
          <Link to={'/shop'}>
          <button className="furnsBtn">Get Started</button>
          </Link>
        </div>
        <div className="furns-img">
          <img src={img2} alt="" className="img2" />
        </div>
      </div>
    </div>
  );
};

export default Furns;
