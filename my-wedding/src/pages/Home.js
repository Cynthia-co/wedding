import React, { useState, useEffect } from "react";
import Timer from "../components/Timer";
import Ceremonie from "../components/Ceremonie";
import History from "./History";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
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
              <path d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8H32c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9V104l4.4-1.6L240.1 4.2zM64 224h64V416h40V224h64V416h48V224h64V416h40V224h64V420.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224z" />
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
                allowfullscreen=""
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
              <path d="M309.8 3.7c5.9-4.9 14.6-4.9 20.5 0l121 100.8C469.5 119.7 480 142.2 480 166V280.1 512H464 352V416c0-17.7-14.3-32-32-32s-32 14.3-32 32v96H176 160V280.1 166c0-23.7 10.5-46.3 28.8-61.5L309.8 3.7zM512 512V244.5l28.1-31.2c3-3.4 7.4-5.3 11.9-5.3s8.9 1.9 11.9 5.3l63.8 70.9c7.9 8.8 12.3 20.3 12.3 32.1V448c0 35.3-28.7 64-64 64H512zM128 244.5V512H64c-35.3 0-64-28.7-64-64V316.3c0-11.9 4.4-23.3 12.3-32.1l63.8-70.9c3-3.4 7.4-5.3 11.9-5.3s8.9 1.9 11.9 5.3L128 244.5zM327 124.3c-3.1-5.4-10.9-5.4-13.9 0l-15.9 28.1-32.3-.3c-6.2-.1-10.1 6.7-7 12.1L274.3 192l-16.4 27.8c-3.2 5.4 .7 12.1 7 12.1l32.3-.3L313 259.7c3.1 5.4 10.9 5.4 13.9 0l15.9-28.1 32.3 .3c6.2 .1 10.1-6.7 7-12.1L365.7 192l16.4-27.8c3.2-5.4-.7-12.1-7-12.1l-32.3 .3L327 124.3z" />
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
                allowfullscreen=""
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
              {" "}
              <path d="M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z" />
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
                allowfullscreen=""
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
