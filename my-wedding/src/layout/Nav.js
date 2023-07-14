import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__global">
        <a href="#home">
          <li className="nav__item">Home</li>
        </a>
        <a href="#history">
          <li className="nav__item">Nous</li>
        </a>
        <a href="#invitation">
          <li className="nav__item">Invitation</li>
        </a>
        <a href="#form">
          <li className="nav__item">Répondre</li>
        </a>
        <a href="#contact">
          {" "}
          <li className="nav__item">Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
