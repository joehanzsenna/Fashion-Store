import React, { useState } from "react";
import "./AboutHero.css";
import { team } from "./AboutHeroDb";

const AboutHero = () => {
  const [member] = useState(team);
  console.log(member);
  return (
    <div className="Team">
      <div className="teamTexts">
        <h5 className="furns-color">OUR CREATIVE FORCE</h5>
        <h2>MEET OUR TEAM</h2>
      </div>
      <div className="Team-contents">
        {member.map((team) => {
          const { id, image, name, position } = team;
          return (
            <div key={id}>
              <img src={image} alt="" className="teamImg" />
              <h3>{name}</h3>
              <h4>{position}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutHero;
