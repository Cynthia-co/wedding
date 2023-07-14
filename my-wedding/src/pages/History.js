import React from "react";
import croatie from "../croatie.jpg";
import oui from "../oui.jpg";
import chateau from "../chateau.jpg";

const History = () => {
  return (
    <div className="history" id="history">
      <div className="history__item">
        <img src={croatie} alt="fassi" style={{ width: 300, height: 300 }} />
        <p>Le 6 octobre 2021, après 3 ans d'amitié, début de la relation</p>
      </div>
      <div className="history__item">
        <img src={chateau} alt="schonbrunn" style={{ width: 500, height: 300 }} />
        <p>1 an et 3 mois, une demande au Chateau de Schonbrun à Vienne</p>
      </div>
      <div className="history__item">
        <img src={oui} alt="fassi" style={{ width: 300, height: 300 }} />
        <p>Et nous voici, prêt à nous lier pour la vie devant vous!</p>
      </div>
    </div>
  );
};

export default History;
