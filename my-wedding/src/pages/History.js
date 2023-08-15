import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import croatie from "../split2.png";
import oui from "../vienne.png";
import chateau from "../schonbrun.png";


const slides = [
  { image: croatie, caption: "Le 6 octobre 2021, après 3 ans d'amitié, début de la relation" },
  { image: chateau, caption: "1 an et 3 mois, une demande au Chateau de Schonbrun à Vienne" },
  { image: oui, caption: "Et nous voici, prêt à nous lier pour la vie devant vous!" }
];

const History = () => {
  return (
    <div className="history-container">
      <h1>Notre histoire</h1>
      <div className="carousel-container">
        <CarouselProvider
          naturalSlideWidth={800}
          naturalSlideHeight={450}
          totalSlides={slides.length}
        >
          <Slider>
            {slides.map((slide, index) => (
              <Slide key={index} index={index}>
                <div className="slide">
                  <img src={slide.image} alt={`Slide ${index + 1}`} />
                  <p className="slide-caption">{slide.caption}</p>
                </div>
              </Slide>
            ))}
          </Slider>
          <ButtonBack className="arrow"><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" ><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></ButtonBack>
          <ButtonNext className="arrow"><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" color="rgb(210,149,0)"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></ButtonNext>
          <DotGroup />
        </CarouselProvider>
      </div>
    </div>
  );
};

export default History;


// const History = () => {
//   return (
//     <div>
//       <h1>Notre histoire</h1>
//       <div className="history" id="history">
//         <div className="history__item">
//           <div className="image-container">
//             <img
//               src={croatie}
//               alt="fassi"
//               style={{ width: 300, height: 300 }}
//             />
//           </div>
//           <p className="history__legend">
//             Le 6 octobre 2021, après 3 ans d'amitié, début de la relation
//           </p>
//         </div>
//         <div className="history__item">
//           <div className="image-container">
//             <img
//               src={chateau}
//               alt="schonbrunn"
//               style={{ width: 500, height: 300 }}
//             />
//           </div>
//           <p className="history__legend">
//             1 an et 3 mois, une demande au Chateau de Schonbrun à Vienne
//           </p>
//         </div>
//         <div className="history__item">
//           <div className="image-container">
//             <img src={oui} alt="fassi" style={{ width: 300, height: 300 }} />
//           </div>
//           <p className="history__legend">
//             Et nous voici, prêt à nous lier pour la vie devant vous!
//           </p>
//         </div>
//       </div>

//       {/* Carrousel pour les écrans plus grands que 1024px */}
//       <div className="carousel">
//         <Carousel showArrows={true} emulateTouch={true} showThumbs={false}>
//           <div>
//             <div className="image-container">
//               <img src={croatie} alt="fassi" />
//             </div>
//             <p className="history__legend">
//               Le 6 octobre 2021, après 3 ans d'amitié, début de la relation
//             </p>
//           </div>
//           <div>
//             <div className="image-container">
//               <img src={chateau} alt="schonbrunn" />
//             </div>
//             <p className="history__legend">
//               1 an et 3 mois, une demande au Chateau de Schonbrun à Vienne
//             </p>
//           </div>
//           <div>
//             <div className="image-container">
//               <img src={oui} alt="fassi" />
//             </div>
//             <p className="history__legend">
//               Et nous voici, prêt à nous lier pour la vie devant vous!
//             </p>
//           </div>
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default History;
