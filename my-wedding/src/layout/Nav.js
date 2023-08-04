import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = () => {
    setShowMenu(false); // Masquer le menu lorsque l'élément du menu est cliqué
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


// const Nav = () => {
//   return (
//     <div className="nav">
//       <ul className="nav__global">
//         <a href="#home">
//           <li className="nav__item">Home</li>
//         </a>
//         <a href="#history">
//           <li className="nav__item">Nous</li>
//         </a>
//         <a href="#invitation">
//           <li className="nav__item">Invitation</li>
//         </a>
//         <a href="#form">
//           <li className="nav__item">Répondre</li>
//         </a>
//         <a href="#contact">
   
//           <li className="nav__item">Contact</li>
//         </a>
//       </ul>
//     </div>
//   );
// };

// export default Nav;

// // <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>