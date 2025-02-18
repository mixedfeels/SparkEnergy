import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderBg from "../../assets/images/header_imgs/lampada_bg.jpg";

const HomeSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${HeaderBg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 600px) {
    height: 85vh;
  }
`;

const DynamicTitle = styled.h1`
  font-size: 8vw;
  color: #f6e24b;
  letter-spacing: 2px solid #b30000;
  font-weight: bold;
  display: inline-block;
  border-right: 3px solid;
  animation: blinkCursor 0.8s steps(1) infinite;
  height: 1.19em;
  overflow: hidden;
  margin-bottom: 0.25rem;
  align-items: center;

  @keyframes blinkCursor {
    50% {
      border-color: transparent;
    }
  }
`;

const SubHeading = styled.h2`
  font-weight: normal;
  margin: 0.1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Container = styled.div`
  padding-bottom: 20vh; /* Tamanho do padding baseado na altura da viewport */

  @media (max-width: 768px) {
    padding-bottom: 15vh;
  }

  @media (max-width: 480px) {
    padding-bottom: 10vh;
  }
`;

const texts = ["Impacto", "Consciência", "Sustentabilidade"];

//============================== Exportar ==============================//

function SectionHeader() {
  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const delayBetweenTexts = 3000;
    const titleElement = document.getElementById("dynamic-title");

    function typeText() {
      const currentText = texts[textIndex];
      titleElement.textContent = currentText.substring(0, charIndex);

      if (charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(() => {
          charIndex = 0;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(typeText, typingSpeed);
        }, delayBetweenTexts);
      }
    }

    typeText();
  }, []);

  return (
    <HomeSection>
      <Container style={{ paddingBottom: "160px" }}>
        <DynamicTitle id="dynamic-title"></DynamicTitle>
        <SubHeading>
          Invista em um futuro mais verde e limpo para as próximas gerações.
          <br />
          Descubra como fazer parte dessa revolução energética.
          <br />
          Juntos, podemos fazer a diferença!
        </SubHeading>
      </Container>
    </HomeSection>
  );
}

export default SectionHeader;
