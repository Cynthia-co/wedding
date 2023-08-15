import React from "react";

const BurgerMenu = ({ onClick }) => {
  return (
    <div className="burger-menu" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="burger-icon">
        <rect width="100" height="15"></rect>
        <rect y="30" width="100" height="15"></rect>
        <rect y="60" width="100" height="15"></rect>
      </svg>
    </div>
  );
};

export default BurgerMenu;


// import React, { useState } from "react";

// const BurgerMenu = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="nav">
//       {/* Burger Icon */}
//       <div className="burger-icon" onClick={toggleMenu}>
//        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
//         <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
//      </svg>
// //       </div>

//       {/* Menu */}
//       <ul className={`nav__global ${isMenuOpen ? "open" : ""}`}>
//         <li className="nav__item">
//           <a href="#home">Home</a>
//         </li>
//         <li className="nav__item">
//           <a href="#history">Nous</a>
//         </li>
//         <li className="nav__item">
//           <a href="#invitation">Invitation</a>
//         </li>
//         <li className="nav__item">
//           <a href="#form">Répondre</a>
//         </li>
//         <li className="nav__item">
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default BurgerMenu;
