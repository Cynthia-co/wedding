import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="nav">
      <BurgerMenu onClick={toggleMenu} />
      <ul className={`nav__global ${showMenu ? "active" : ""}`}>
        <a href="#home" onClick={handleItemClick}>
          <li className="nav__item">Home</li>
        </a>
        <a href="#history" onClick={handleItemClick}>
          <li className="nav__item">Nous</li>
        </a>
        <a href="#invitation" onClick={handleItemClick}>
          <li className="nav__item">Invitation</li>
        </a>
        <a href="#form" onClick={handleItemClick}>
          <li className="nav__item">Répondre</li>
        </a>
        <a href="#contact" onClick={handleItemClick}>
          <li className="nav__item">Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
