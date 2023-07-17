import React from "react";

const Footer = () => {
  return (
    <div className="contact" id="contact">
      <h1>
        Vous pouvez également nous répondre <br/>ou nous contacter par mail ou
        téléphone :
      </h1>
      <div className="contact__detail">
        <a href="mailto:cynthiaetdan@gmail.com"><p>cynthiaetdan@gmail.com</p></a>
        <a href="tel:+33633614020"><p>Cynthia Colin : 06.33.61.40.20</p></a>
        <a href="tel:+33675547574"><p>Dan Fassi: 06.75.54.75.74</p></a>
      </div>
    </div>
  );
};

export default Footer;
