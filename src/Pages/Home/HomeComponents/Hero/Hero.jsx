import React from "react";
import "./Hero.css";
import homeImg from "../../../../assets/Fashion-Store.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className="subHero">
        <img src={homeImg} alt="" className="homeImg" />
        <div className="subHeroTexts">
          <h1>Fashion Store</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, cum.
            Maiores laboriosam quisquam autem magni dolore expedita, sit id iste
            distinctio repellat asperiores neque repellendus minus nam est,
            ducimus placeat!
          </h5>
          <Link to={'/shop'}>
            <button className="subBtn">Get Started</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
