import React, { useState, useEffect } from "react";
import croatie from "../split.webp";
import oui from "../ouii.webp";
import chateau from "../schonbrun.webp";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const History = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024); // Mettre à jour la variable en fonction de la largeur de l'écran
    };

    handleResize(); // Appeler la fonction pour initialiser la variable
    window.addEventListener("resize", handleResize); // Ajouter un écouteur d'événement sur le redimensionnement de l'écran

    return () => {
      window.removeEventListener("resize", handleResize); // Supprimer l'écouteur d'événement lors du démontage du composant
    };
  }, []);

  return (
    <div>
      <h1>Notre histoire</h1>
      {isMobileOrTablet ? (
        <div className="carousel">
          <Carousel showArrows={true} emulateTouch={true} showThumbs={false}>
            <div className="slide">
              <img src={croatie} alt="fassi" />
              <p>
                Le 6 octobre 2021, après 3 ans d'amitié, début de la relation
              </p>
            </div>
            <div className="slide">
              <img src={chateau} alt="schonbrunn" />
              <p>
                1 an et 3 mois, une demande au Chateau de Schonbrun à Vienne
              </p>
            </div>
            <div className="slide">
              <img src={oui} alt="fassi" />
              <p>Et nous voici, prêt à nous lier pour la vie devant vous!</p>
            </div>
          </Carousel>
        </div>
      ) : (
        <div className="history" id="history">
          <div className="history__item">
            <div className="image-container">
              <img
                src={croatie}
                alt="fassi"
                style={{ width: 300, height: 300 }}
              />
            </div>
            <p className="history__legend">
              Le 6 octobre 2021, après 3 ans d'amitié, début de la relation
            </p>
          </div>
          <div className="history__item">
            <div className="image-container">
              <img
                src={chateau}
                alt="schonbrunn"
                style={{ width: 500, height: 300 }}
              />
            </div>
            <p className="history__legend">
              1 an et 3 mois, une demande au Chateau de Schonbrun à Vienne
            </p>
          </div>
          <div className="history__item">
            <div className="image-container">
              <img src={oui} alt="fassi" style={{ width: 300, height: 300 }} />
            </div>
            <p className="history__legend">
              Et nous voici, prêt à nous lier pour la vie devant vous!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
