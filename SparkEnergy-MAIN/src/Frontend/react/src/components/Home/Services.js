import React from "react";
import styled from "styled-components";
import { BookOpenText, MessagesSquare, ChartLine } from "lucide-react";
import {
  ButtonContainer,
  ButtonH2,
  Button,
} from "../../styles/home/AboutStyle";
import { Link } from "react-router-dom";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  padding-top: 5rem;
  margin-top: 7rem;
`;

const ServiceContainer = styled.div`
  text-align: center;
  margin: auto;
  justify-content: space-between;
  margin-top: 4rem;
  gap: 1rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const ServicesCard = styled(Link)`
  width: 350px;
  border-radius: 8px;
  color: #000;
  border: 0.5px solid #000;
  padding: 20px;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  background-color: yellow;
  text-decoration: none;

  transition: 0.5s ease;
  &:hover {
    transform: translateY(-20px);
  }
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  font-family: "Expletus Sans", sans-serif;
  background-image: linear-gradient(
    to right,
    #ffff00,
    #32cd32
  ); // -> amarelo com cinza
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

function Sevices() {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container id="services">
      <H2>O que oferecemos?</H2>
      <ServiceContainer>
        <ServicesCard to="/" onClick={(e) => scrollToSection(e, "ods")}>
          <BookOpenText size={50} />
          <h2 style={{ fontSize: "20px" }}>
            Tudo sobre Energia Limpa e acessível
          </h2>
          <p style={{ fontSize: "15px" }}>
            Nosso portal é dedicado a divulgar e compartilhar conhecimentos
            sobre Energia Limpa e Acessível. Aqui, você encontrará tópicos sobre
            a ODS 7 da ONU, que visa garantir o acesso universal a energia
            sustentável. Exploramos diferentes tipos de energia limpa e
            renovável, além de abordar profissões, pessoas e organizações
            envolvidas nessa causa.
          </p>
        </ServicesCard>

        <ServicesCard to="SparkConnect">
          <MessagesSquare size={48} />
          <h2>SparkConnect</h2>
          <p style={{ fontSize: "15px" }}>
            O SparkPost busca criar um espaço onde o tema da Energia Limpa e
            Acessível ganhe mais visibilidade, conectando pessoas e organizações
            interessadas e engajadas na causa. Por meio de postagens e
            publicações, promovemos a troca de sugestões e denúncias sobre
            condições locais, além de ser possível fazer divulgações de
            campanhas e eventos relacionados ao tema.
          </p>
        </ServicesCard>

        <ServicesCard to="/calculo">
          <ChartLine size={48} />
          <h2>Calculadora de Produção de energia</h2>
          <p style={{ fontSize: "15px" }}>
            Desenvolvemos um calculadora para gerar um gráfico e calcular a
            produção de energia de placas solares (Energia Solar) e de
            aerogeradores (Energia Eólica) em determinado período de tempo.
          </p>
        </ServicesCard>
      </ServiceContainer>
      <ButtonContainer>
        <ButtonH2>
          Sua colaboração é o que vai fazer o futuro acontecer!
        </ButtonH2>

        <Button to="/SignUp">
          <span>Junte-se a nós!</span>
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Sevices;
