import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EnergyBox from "./EnergyBox";
import EnergyButton from "./EnergyButton";

import solarCell from "../../assets/images/typesenergy_img/solar-cell.png";
import waterEnergy from "../../assets/images/typesenergy_img/water-energy.png";
import nuclearPlant from "../../assets/images/typesenergy_img/nuclear-plant.png";
import windmill from "../../assets/images/typesenergy_img/windmill.png";
import waves from "../../assets/images/typesenergy_img/waves_697809.png";
import geotermic from "../../assets/images/typesenergy_img/geotermic.png";
import biomass from "../../assets/images/typesenergy_img/biomass.png";

gsap.registerPlugin(ScrollTrigger);

const SlideHorizontal = styled.section`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  justify-content: center;
`;

const ContainerSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #010201;
  position: relative;
  padding-bottom: 10rem;

  @media (max-width: 600px) {
    min-height: 70vh;
    padding-bottom: 7rem;
  }
`;

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  transform: rotateX(-20deg) translateY(-70px);
  transform-style: preserve-3d;
  perspective: 800px;
  user-select: none;
  cursor: grab;
  width: 55%;

  @media (max-width: 600px) {
    height: 52vh;
  }
`;

const CarouselImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -80px 0 0 -110px; 
  width: 230px; 
  height: 180px; 
  transform: translate3d(
    0,
    0,
    -15px
  ); 
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transform-origin: 50% 50%;

  
  @media (max-width: 768px) {
    width: 172px; 
    height: 135px; 
    margin: -60px 0 0 -75px; 
    transform: translate3d(
      0,
      0,
      -10px
    ); 
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 30px; 
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Slider = () => {
  const progresso = useRef({ value: 0 });
  const imagensRef = useRef([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const imagens = imagensRef.current;
    const raio = 242; 
    const animar = () => {
      if (imagens.length === 0) return; 
      imagens.forEach((imagem, index) => {
        if (imagem) {
          
          const angulo = index / imagens.length - progresso.current.value;
          const x = -Math.sin(angulo * Math.PI * 2) * raio;
          const y = Math.cos(angulo * Math.PI * 2) * raio;
          gsap.to(imagem, {
            duration: 2,
            ease: "power4.out",
            transform: `translate3d(${x}px, 0px, ${y - 5}px) rotateY(${
              360 * -angulo
            }deg)`,
            background: `hsla(${Math.floor(
              (index / imagens.length) * 360
            )}, 90%, 50%, 0.5)`,
          });
        }
      });
    };

    gsap.ticker.add(animar);

    const handleScroll = (e) => {
      const delta = e.deltaY || e.deltaX;
      const scrollSpeed = e.type === "wheel" ? delta * -0.0005 : delta * 0.05;
      e.preventDefault();
      gsap.to(progresso.current, {
        duration: 2,
        ease: "power4.out",
        value: `+=${scrollSpeed}`,
      });
    };

    const carouselElement = carouselRef.current;
    carouselElement.addEventListener("wheel", handleScroll, { passive: false });
    carouselElement.addEventListener("touchmove", handleScroll, {
      passive: false,
    });
    return () => {
      carouselElement.removeEventListener("wheel", handleScroll);
      carouselElement.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  return (
    <ContainerSlider id="container-slider">
      <SlideHorizontal>
        <Carousel ref={carouselRef}>
          {[
            {
              img: solarCell,
              title: "Solar",
              description:
                "A energia solar é gerada pela conversão da luz do sol em eletricidade ou calor.",
            },

            {
              img: waterEnergy,
              title: "Hidrelétrica",
              description:
                "A energia hidrelétrica é gerada pela força da água em movimento.",
            },

            {
              img: nuclearPlant,
              title: "Nuclear",
              description:
                "A energia nuclear é gerada a partir de reações nucleares que liberam grandes quantidades de energia.",
            },

            {
              img: windmill,
              title: "Eólica",
              description:
                "A energia eólica é gerada pelo vento, que aciona turbinas para produzir eletricidade.",
            },

            {
              img: waves,
              title: "Maremotriz",
              description:
                "A energia maremotriz é gerada pelo movimento das marés, convertendo a força das águas em eletricidade.",
            },

            {
              img: geotermic,
              title: "Geotérmica",
              description:
                "A energia geotérmica é gerada pelo calor proveniente do interior da Terra.",
            },

            {
              img: biomass,
              title: "Biomassa",
              description:
                "A energia de biomassa é gerada a partir da queima de materiais orgânicos.",
            },
          ].map((energia, index) => (
            <CarouselImage
              key={index}
              className="carousel-image"
              ref={(el) => {
                if (el) imagensRef.current[index] = el; 
              }}
            >
              <EnergyBox
                imgSrc={energia.img}
                title={energia.title}
                description={energia.description}
                link={energia.link}
              />
            </CarouselImage>
          ))}
        </Carousel>
      </SlideHorizontal>

      <ButtonWrapper>
        <EnergyButton link="/EnergyPage">Clique para saber mais sobre as energias</EnergyButton>
      </ButtonWrapper>
    </ContainerSlider>
  );
};

export default Slider;
