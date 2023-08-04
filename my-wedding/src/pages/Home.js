import React, { useState, useEffect } from "react";
import Timer from "../components/Timer";
import Ceremonie from "../components/Ceremonie";
import History from "./History";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = screenWidth < 1023;
  return (
    <div>
      <div className="intro">
        <h2>Bienvenue sur le site de notre mariage!</h2>
        <Timer />
        <p>
          Vous pourrez y voir toutes les informations relatives au Jour J,
          confirmez votre présence, nous laisser un petit mot et simplement
          nous contacter!
        </p>
      </div>
      <History />
      <h1>Deux oui pour un nom !</h1>
      <div id="invitation">
        <div className="all_ceremonies">
          <div className="ceremonie">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2.5em"
              viewBox="0 0 512 512"
            >
              {/* ... SVG Path ... */}
            </svg>
            <Ceremonie
              type={"Mairie"}
              lieu={"Mairie de Levallois"}
              date={"13 décembre 2023 à 14h00"}
              adresse={"1 place de la République 92300 Levallois-Perret"}
            />
            {isMobile ? (
              <a
                href="https://www.google.com/maps/place/1+place+de+la+République+92300+Levallois-Perret"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir l'adresse sur Google Maps
              </a>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.185549282216!2d2.2853006757666177!3d48.89280089828515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f83052c97b3%3A0x62d7437fdc0cfb83!2sMairie%20de%20Levallois-Perret!5e0!3m2!1sfr!2sfr!4v1689514930684!5m2!1sfr!2sfr"
                width="350px"
                height="350px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="plan mairie"
              ></iframe>
            )}
          </div>
          <div className="ceremonie">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2.5em"
              viewBox="0 0 640 512"
            >
              {/* ... SVG Path ... */}
            </svg>
            <Ceremonie
              type={"Synagogue"}
              lieu={"Les Tournelles"}
              date={"17 décembre 2023 à 12h00"}
              adresse={"21bis Rue des Tournelles 75004 Paris"}
            />
            {isMobile ? (
              <a
                href="https://www.google.com/maps/place/21bis+Rue+des+Tournelles+75004+Paris"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir l'adresse sur Google Maps
              </a>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.1457203491454!2d2.364590175764206!3d48.85543160091573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720003da280d%3A0x82497008f94fd52!2s21bis%20Rue%20des%20Tournelles%2C%2075004%20Paris!5e0!3m2!1sfr!2sfr!4v1689514819420!5m2!1sfr!2sfr"
                width="350px"
                height="350px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="plan syna"
              ></iframe>
            )}
          </div>
          <div className="ceremonie">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2.5em"
              viewBox="0 0 640 512"
            >
              {/* ... SVG Path ... */}
            </svg>
            <Ceremonie
              type={"Soirée"}
              lieu={"Salon Berlioz du Grand Hotel Opéra"}
              date={"17 décembre 2023 à 19h00"}
              adresse={"2 rue Scribe, 75009 Paris"}
            />
            {isMobile ? (
              <a
                href="https://www.google.com/maps/place/2+rue+Scribe+75009+Paris"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir l'adresse sur Google Maps
              </a>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.32270742286!2d2.328094007357075!3d48.87112436164556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3138942bd7%3A0x2871471abe5f8ad5!2s2%20Rue%20Scribe%2C%2075009%20Paris!5e0!3m2!1sfr!2sfr!4v1689514731725!5m2!1sfr!2sfr"
                width="350px"
                height="350px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="plan opera"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
