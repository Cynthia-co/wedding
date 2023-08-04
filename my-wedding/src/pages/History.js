import React from "react";
import croatie from "../split.webp";
import oui from "../ouii.webp";
import chateau from "../schonbrun.webp";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const History = () => {
  return (
    <div>
      <h1>Notre histoire</h1>
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

      {/* Carrousel pour les écrans plus grands que 1024px */}
      <div className="carousel">
        <Carousel showArrows={true} emulateTouch={true} showThumbs={false}>
          <div>
            <div className="image-container">
              <img src={croatie} alt="fassi" />
            </div>
            <p className="history__legend">
              Le 6 octobre 2021, après 3 ans d'amitié, début de la relation
            </p>
          </div>
          <div>
            <div className="image-container">
              <img src={chateau} alt="schonbrunn" />
            </div>
            <p className="history__legend">
              1 an et 3 mois, une demande au Chateau de Schonbrun à Vienne
            </p>
          </div>
          <div>
            <div className="image-container">
              <img src={oui} alt="fassi" />
            </div>
            <p className="history__legend">
              Et nous voici, prêt à nous lier pour la vie devant vous!
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default History;
