import React from "react";
import logo from "../logoor.webp";


const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__logo">
        <img src={logo} className="logo" alt="logo" />
        <h1>Dan & Cynthia</h1>
      </div>
    </div>
  );
};

export default Header;
