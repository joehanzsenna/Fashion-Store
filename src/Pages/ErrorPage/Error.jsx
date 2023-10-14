import React from "react";
import "./Error.css";
import { Navigate, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="errorContainer">
      <div className="errorContent">
        <h1 className="funny-404-heading">Oops! 404 - Page Not Found</h1>
        <p className="funny-404-message">
          Looks like you're lost in cyberspace.
        </p>
        <img
          className="funny-404-image"
          src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
          alt="Lost Astronaut Gif"
        />
        <button onClick={goToHomePage} className="errorBtn">
          Go back to home page
        </button>
      </div>
    </div>
  );
};

export default Error;
