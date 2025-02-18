import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import solarCell from "../assets/images/typesenergy_img/solar-cell.png";
import waterEnergy from "../assets/images/typesenergy_img/water-energy.png";
import nuclearPlant from "../assets/images/typesenergy_img/nuclear-plant.png";
import windmill from "../assets/images/typesenergy_img/windmill.png";
import waves from "../assets/images/typesenergy_img/waves_697809.png";
import geotermic from "../assets/images/typesenergy_img/geotermic.png";
import biomass from "../assets/images/typesenergy_img/biomass.png";

import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const PageContainer = styled.div`
  background-color: #010201;
  padding: 60px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 3.5em;
  color: #f6e24b;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

const SubTitle = styled.h2`
  font-size: 1.8em;
  color: #fff;
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
`;

const EnergyGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  animation: fadeIn 2s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const EnergyBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 0 30px;
  opacity: 0;
  transform: translateX(-100px);
  transition: transform 0.3s ease;
`;

const EnergyBoxContainer = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 400px;
  height: 250px;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #f6e24b;
    transform: translateY(-10px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
`;

const EnergyImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

// const InfoText = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 20px;
//   width: 50%;
//   color: #333;
//   font-size: 1em;
//   font-weight: 600;
//   opacity: 0;
//   transform: translateX(20px);
//   transition: opacity 0.3s ease, transform 0.3s ease;

//   p {
//     margin-top: 10px;
//   }

//   .typewriter {
//     display: inline-block;
//     white-space: nowrap;
//     overflow: hidden;
//     border-right: 0.15em solid #f6e24b;
//     animation: typing 3s steps(30) 1s forwards, blink 0.75s step-end infinite;
//   }

//   @keyframes typing {
//     from {
//       width: 0;
//     }
//     to {
//       width: 100%;
//     }
//   }

//   @keyframes blink {
//     50% {
//       border-color: transparent;
//     }
//   }
// `;

const ExtraTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0 30px;
  height: 100%;
`;

const ExtraText = styled.p`
  font-size: 1em;
  line-height: 1.6;
  margin: 0 20px;
  color: #fff;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({ bgColor }) => bgColor};
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ScrollButton = styled.a`
  display: inline-block;
  background-color: #f6e24b;
  color: #010201;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 28px;
  border: 2px double solid #f6e24b;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;

  &:active {
    transform: scale(0.98);
    background-color: #333;
  }
`;

const EnergyPage = () => {
  let navigate = useNavigate();
  const containerRef = useRef(null);
  const energyBoxRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power4.out" }
    );

    energyBoxRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const energyTypeColors = {
    solar: "#f6e24b",
    hydro: "#3498db",
    nuclear: "#c0392b",
    wind: "#7f8c8d",
    wave: "#1abc9c",
    geothermal: "#e67e22",
    biomass: "#27ae60",
  };

  return (
    <PageContainer ref={containerRef}>
      <Title>Descubra o Poder da Energia Renovável</Title>
      <SubTitle>Como Diferentes Tipos de Energia Funcionam</SubTitle>

      <EnergyGrid>
        {[
          {
            imgSrc: solarCell,
            title: "Energia Solar",
            type: "solar",
            extraText:
              "A energia solar é gerada pela luz do sol, através de painéis fotovoltaicos. É uma fonte limpa, renovável e sustentável. Pode ser utilizada tanto em ambientes domésticos quanto comerciais, e seu uso está crescendo rapidamente ao redor do mundo. A energia solar reduz as emissões de carbono e pode ser aplicada em regiões com grande quantidade de sol.",
          },
          {
            imgSrc: waterEnergy,
            title: "Energia Hidrelétrica",
            type: "hydro",
            extraText:
              "A energia hidrelétrica é uma das formas mais utilizadas de geração de eletricidade no mundo. Ela aproveita a força da água em movimento, como rios ou quedas d’água, para gerar eletricidade. Embora seja eficiente, a construção de barragens pode impactar o meio ambiente e deslocar populações. A energia hidrelétrica também depende das condições climáticas.",
          },
          {
            imgSrc: nuclearPlant,
            title: "Energia Nuclear",
            type: "nuclear",
            extraText:
              "A energia nuclear é gerada a partir de reações de fissão nuclear, liberando grandes quantidades de energia. Embora eficiente, apresenta desafios relacionados ao descarte de resíduos radioativos e ao risco de acidentes. A energia nuclear é uma fonte de baixo carbono, mas o gerenciamento dos resíduos e a segurança permanecem preocupações.",
          },
          {
            imgSrc: windmill,
            title: "Energia Eólica",
            type: "wind",
            extraText:
              "A energia eólica é gerada através de turbinas movidas pelo vento. A energia do vento é convertida em eletricidade sem emissões de gases de efeito estufa, tornando-a uma das fontes mais sustentáveis. Os parques eólicos são encontrados principalmente em regiões com vento constante e forte, como áreas costeiras ou planícies.",
          },
          {
            imgSrc: waves,
            title: "Energia das Ondas",
            type: "wave",
            extraText:
              "A energia das ondas utiliza o movimento das ondas do mar para gerar eletricidade. Embora ainda esteja em fase de desenvolvimento, ela tem grande potencial, especialmente para países com longas costas. A energia das ondas pode se tornar uma fonte importante de energia renovável no futuro.",
          },
          {
            imgSrc: geotermic,
            title: "Energia Geotérmica",
            type: "geothermal",
            extraText:
              "A energia geotérmica é proveniente do calor natural do interior da Terra. Esse calor pode ser utilizado para gerar eletricidade ou para aquecimento. A energia geotérmica é uma fonte confiável e constante de energia, especialmente em regiões com atividade geotérmica significativa, como a Islândia.",
          },
          {
            imgSrc: biomass,
            title: "Energia de Biomassa",
            type: "biomassa",
            extraText:
              "A biomassa utiliza materiais orgânicos, como madeira, resíduos agrícolas e outros materiais biológicos, para gerar energia. Pode ser usada para aquecer edifícios, gerar eletricidade ou até mesmo para produzir biocombustíveis. A biomassa é uma fonte renovável que pode reduzir a dependência de combustíveis fósseis.",
          },
        ].map((energy, index) => (
          <EnergyBoxWrapper
            ref={(el) => (energyBoxRefs.current[index] = el)}
            key={index}
          >
            <EnergyBoxContainer>
              <EnergyImg src={energy.imgSrc} alt={energy.title} />
            </EnergyBoxContainer>
            <ExtraTextContainer>
              <ExtraText bgColor={energyTypeColors[energy.type]}>
                {energy.extraText}
              </ExtraText>
            </ExtraTextContainer>
          </EnergyBoxWrapper>
        ))}
      </EnergyGrid>

      <ButtonWrapper>
        <ScrollButton
          onClick={() => {
            navigate("/");
          }}
        >
          Voltar para pagina principal
        </ScrollButton>
      </ButtonWrapper>
    </PageContainer>
  );
};

export default EnergyPage;
