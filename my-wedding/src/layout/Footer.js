import React from "react";

const Footer = () => {
  return (
    <div className="contact" id="contact">
      <h1>
        Vous pouvez également nous répondre par: 
      </h1>
      <div className="contact__detail">
        <h2>Mail :</h2>
        <a href="mailto:cynthiaetdan@gmail.com"><p className="pfooter"> cynthiaetdan@gmail.com</p></a>
        <h2>Téléphone/Whatsapp:</h2>
        <a href="tel:+33633614020"><p className="pfooter"> Cynthia Colin : 06.33.61.40.20</p></a>
        <a href="tel:+33675547574"><p className="pfooter">Dan Fassi: 06.75.54.75.74</p></a>
        <h2>Voie postale : </h2>
        <p className="pfooter">Colin Cynthia : 38 rue Trebois 92300 Levallois-Perret</p>
      </div>
    </div>
  );
};

export default Footer;
