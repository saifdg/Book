import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <div className="section">
      <div className="containere">
        <div className="logo">
          
         <Link to={"/"} ><img src={logo} alt="logo" /></Link>
        </div>
        <div className="links">
          <Link className="a" to={"/home"}>Home</Link>
          <Link className="a" to={"/"}>Store</Link>
          <Link className="a" to={"/"}>About Us</Link>
        </div>
        <div className="auth">
          <Link className="a" to={"/login"}>Sign In</Link>
          <Link className="a adjust" to={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
