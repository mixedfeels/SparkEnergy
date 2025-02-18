import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const TypesEnergyContainer = styled.section`
  background-color: #f4c430;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
`;

const Header = styled.header`
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  color: black;
  padding: 20px;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 1.2em;
  color: black;
  padding: 20px;
`;

const ContainerSlider = styled.section`
  display: grid;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #0e100f;
`;

const SlideHorizontal = styled.section`
  display: flex;
  gap: 10px;
  padding: 15px;
  overflow: hidden;
`;

const BoxEnergy = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  min-width: 300px;
  max-width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const EnergyTitle = styled.p`
  font-size: 1.8em;
  color: #333;
  font-weight: 700;
`;

const EnergyText = styled.p`
  font-size: 1em;
  color: #666;
  padding: 10px 0;
  line-height: 1.5;
`;

const EnergyButton = styled.button`
  background-color: #000;
  color: #f4c430;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 24px;
  border: 2px double solid #f4c430;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
  &:hover {
    background-color: #f4c430;
    color: #000;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
    background-color: #333;
  }
`;

const NavButton = styled.button`
  color: white;
  height: 50px;
  width: 50px;
  background-color: #1c1c1c;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #333;
  }
  span {
    font-size: 30px;
    color: white;
    transition: color 0.3s ease;
  }
  &:hover span {
    color: #f4c430;
  }
`;

function TypesEnergy() {
  useEffect(() => {
    let sections = gsap.utils.toArray(".box-energy");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#container-slider",
        pin: true,
        scrub: 0.1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector("#container-slider").offsetWidth,
      },
    });
  }, []);

  return (
    <TypesEnergyContainer>
      <Header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Header>

      <ContainerSlider id="container-slider">
        <SlideHorizontal id="slidehorizontal">
          <BoxEnergy className="box-energy">
            <img src="/img/solar-cell.png" alt="Solar Energy" />
            <EnergyTitle>Solar</EnergyTitle>
            <EnergyText>
              A energia solar fotovoltaica é a energia obtida através da conversão
              direta da luz em eletricidade.
            </EnergyText>
            <a href="pags-energia/pagraelEnergiasolar.html" target="_blank">
              <EnergyButton>Clique para saber mais</EnergyButton>
            </a>
          </BoxEnergy>

          <BoxEnergy className="box-energy">
            <img src="/img/water-energy.png" alt="Hidrelétrica" />
            <EnergyTitle>Hidrelétrica</EnergyTitle>
            <EnergyText>
              A energia hidráulica é a energia obtida a partir da energia
              potencial de uma massa de água.
            </EnergyText>
            <a href="energias/energiahidreletrica.html" target="_blank">
              <EnergyButton>Clique para saber mais</EnergyButton>
            </a>
          </BoxEnergy>

          {/* Repeat other energy boxes here */}
        </SlideHorizontal>

        <div className="container-botaoupdown">
          <NavButton title="Next Section">
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </NavButton>
        </div>
      </ContainerSlider>

      <Footer>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Footer>
    </TypesEnergyContainer>
  );
}

export default TypesEnergy;