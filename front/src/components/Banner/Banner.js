import React from "react";
import cover from "../../assets/cover.jpg";
import "./Banner.css";
import Books from "../Books/Books";

const Banner = () => {
  return (
    <>
    <div className="cover">
      <div className="section1">
        <h1>Welcome to our Store</h1>
      </div>
    </div>
    <Books/>
    </>
  );
};

export default Banner;
