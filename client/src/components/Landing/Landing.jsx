import React from "react";
import { Link } from "react-router-dom"
import "./Landing.css"

const Landing = () => {
  return (
    <div className="LandingPage">
      <Link to="/home" >
        <button className="Link">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Landing;