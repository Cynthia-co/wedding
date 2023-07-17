import React from "react";
import croatie from "../split.png";
import oui from "../ouii.png";
import chateau from "../schonbrun.png";

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
            {" "}
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
    </div>
  );
};

export default History;
