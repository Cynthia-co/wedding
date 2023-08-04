import React from "react";
import logo from "../logoor.webp";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__logo">
        <img src={logo} className="logo" alt="logo" />
        <h1>Dan & Cynthia</h1>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
