import styled from "styled-components";
import { useRef } from "react";
import GambaBg from "../../assets/images/ONGs_image/Gamba.jpg";
import AmigosBemBg from "../../assets/images/ONGs_image/AmigosBem.jpg";
import casa12voltsBg from "../../assets/images/ONGs_image/casa12volts-desenho.jpg";
import DomPixoteBg from "../../assets/images/ONGs_image/DomPixote.jpg";
import EcologicaBg from "../../assets/images/ONGs_image/Ecologica.jpg";
import GreenpeaceBg from "../../assets/images/ONGs_image/Greenpeace.jpg";
import IEMABg from "../../assets/images/ONGs_image/IEMA.jpg";
import LitroBg from "../../assets/images/ONGs_image/Litro.jpg";
import PerifaBg from "../../assets/images/ONGs_image/Perifa.jpg";
import revolusolarBg from "../../assets/images/ONGs_image/revolusolar.jpg";
import SociedadeSolBg from "../../assets/images/ONGs_image/SociedadeSol.jpg";
import WWFBg from "../../assets/images/ONGs_image/WWF.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { H2, H3Card } from "../../styles/home/LayoutStyle";

const OngSectionContainer = styled.section`
  text-align: center;
`;

const OngContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Poppins", sans-serif;
  color: white;
`;

const CardArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1124px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 40%;
  height: 240px;
  margin: 5px;
  border: 2px solid #f6e24b;
  border-radius: 10px;

  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 2px 2px 5px black;
  text-align: justify;
  transition: background-image 2s;

  overflow: hidden;
  position: relative;

  p {
    margin: 1.25rem;
    text-align: justify;
  }

  &:hover {
    div {
      height: 210%;
      overflow: visible;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Overlay = styled.div`
  height: 0;
  width: 100%;
  background: linear-gradient(transparent, #1c1c1c 121%);
  border-radius: 10px;
  position: absolute;
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  text-align: center;
  font-size: 14px;
  transition: height 0.5s;

  a {
    margin-top: 10px;
    text-decoration: none;
    font-size: 14px;
  }

  @media (max-width: 600px) {
    height: 100%;
    padding: 0;
  }
`;

const ButtonContainer = styled.div`
  @media (max-width: 600px) {
    height: 100%;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  font-weight: bold;
  background-color: #ffe100;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const BtnNextBack = styled.button`
  border: none;
  background-color: transparent;
  color: #ffe100;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";

  &:hover {
    cursor: pointer;
  }
`;

function LayoutONG() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  const refBack = useRef(null);
  const refNext = useRef(null);

  //================================================

  var currentIndexBox1 = 0,
    currentIndexBox2 = 0,
    currentIndexBox3 = 0,
    currentIndexBox4 = 0;

  function BackVoltar() {
    currentIndexBox1--;
    currentIndexBox2--;
    currentIndexBox3--;
    currentIndexBox4--;

    AlternaBOX1();
    AlternaBOX2();
    AlternaBOX3();
    AlternaBOX4();
  }

  function NextAvancar() {
    currentIndexBox1++;
    currentIndexBox2++;
    currentIndexBox3++;
    currentIndexBox4++;

    AlternaBOX1();
    AlternaBOX2();
    AlternaBOX3();
    AlternaBOX4();
  }

  function AlternaBOX1(value) {
    const box1 = box1Ref.current;
    if (!box1) return; // Retorna se box1 for nulo

    if (currentIndexBox1 > 2) {
      currentIndexBox1 = 0;
    }
    if (currentIndexBox1 < 0) {
      currentIndexBox1 = 2;
    }

    if (currentIndexBox1 === 0) {
      box1.querySelector("h3").textContent = "Instituto Perifa Sustentável";
      box1.querySelector("p").textContent =
        "Ativista do Instituto Perifa Sustentável dá espaço à instalação de painéis solares no meio de comunidade.";
      box1.querySelector("img").src = `${PerifaBg}`;
      box1.querySelector("a").href =
        "https://ciclovivo.com.br/planeta/energia/periferia-sustentavel-inaugura-a-1a-micro-geradora-de-energia-solar-da-quebrada/#:~:text=A%201%C2%AA%20Micro%20Geradora%20de%20Energia%20Solar%20da,de%20autonomia%20em%20energia%20limpa%20e%20totalmente%20sustent%C3%A1vel.";
    } else if (currentIndexBox1 === 1) {
      box1.querySelector("h3").textContent = "Gambá";
      box1.querySelector("p").textContent =
        "A Organização Gambá distribuiu balas doces na rua como forma de provocação à reflexão sobre energia nuclear na Bahia.";

      box1.querySelector("img").src = `${GambaBg}`;
      box1.querySelector("a").href =
        "https://www.gamba.org.br/noticias/gamba-provoca-baianos-e-turistas-a-refletirem-sobre-o-nuclear-na-bahia";
    } else {
      box1.querySelector("h3").textContent = "IEMA";
      box1.querySelector("p").textContent =
        "IEMA empreita a instalação de 70 sistemas fotovoltaicos em 65 comunidades do Território Indígena Xingu, na porção Sul da Amazônia brasileira.";
      box1.querySelector("img").src = `${IEMABg}`;
      box1.querySelector("a").href =
        "https://energiaeambiente.org.br/produto/avaliacao-de-impacto-socioambiental-da-introducao-de-sistemas-fotovoltaicos-no-territorio-indigena-do-xingu";
    }
  }

  function AlternaBOX2(value) {
    if (currentIndexBox2 > 2) {
      currentIndexBox2 = 0;
    }
    if (currentIndexBox2 < 0) {
      currentIndexBox2 = 2;
    }

    const box2 = box2Ref.current;
    if (box2) {
      if (currentIndexBox2 === 0) {
        box2.querySelector("h3").textContent = "Revolusolar";
        box2.querySelector("p").textContent =
          "Projeto da Revolusolar abastace Museu da Maré com energia solar.";
        box2.querySelector("img").src = `${revolusolarBg}`;
        box2.querySelector("a").href = "https://revolusolar.org.br/projetos/";
      } else if (currentIndexBox2 === 1) {
        box2.querySelector("h3").textContent = "Greenpeace";
        box2.querySelector("p").textContent =
          "Greenpeace protesta em plataforma petrolífera da Shell e recebe protesto de US$ 8,6 milhões.";
        box2.querySelector("img").src = `${GreenpeaceBg}`;
        box2.querySelector("a").href =
          "https://www.greenpeace.org/brasil/blog/greenpeace-sofre-processo-de-intimidacao-de-shell/";
      } else {
        box2.querySelector("h3").textContent = "Litro de Luz";
        box2.querySelector("p").textContent =
          "Investimento em energia solar beneficia 62 famílias de nordestinos na região da Morada do Catimbau.";
        box2.querySelector("img").src = `${LitroBg}`;
        box2.querySelector("a").href =
          "https://www.litrodeluz.com/#:~:text=O%20Litro%20de%20Luz%20utiliza%20materiais%20simples%20para%20tornar%20a";
      }
    }
  }

  function AlternaBOX3(value) {
    if (currentIndexBox3 > 2) {
      currentIndexBox3 = 0;
    }
    if (currentIndexBox3 < 0) {
      currentIndexBox3 = 2;
    }

    const box3 = box3Ref.current;
    if (box3) {
      if (currentIndexBox3 === 0) {
        box3.querySelector("h3").textContent = "Sociedade do Sol";
        box3.querySelector("p").textContent =
          "Sociedade do Sol insiste em investir esforços em sua proposta de Aquecedor Solar de Baixo Custo e na implementação de painéis fotovoltaicos.";
        box3.querySelector("img").src = `${SociedadeSolBg}`;
        box3.querySelector("a").href =
          "https://www.sociedadedosol.org.br/fotovoltaico";
      } else if (currentIndexBox3 === 1) {
        box3.querySelector("h3").textContent = "Instituto Dom Pixote";
        box3.querySelector("p").textContent =
          "O Instituto Dom Pixote intenta pioneiramente a instalação do biogestor israelense HomeBiogas® no Brasil.";
        box3.querySelector("img").src = `${DomPixoteBg}`;
        box3.querySelector("a").href =
          "https://www.dompixote.org/noticias/conheca-a-homebiogas-e-o-projeto-rio-sustentavel/";
      } else {
        box3.querySelector("h3").textContent = "ONG Verde";
        box3.querySelector("p").textContent =
          "A ONG Verde prepara uma maquete real de seu projeto CASA12Volts que consiste em uma casa 100% alimentada com energia renovável.";
        box3.querySelector("img").src = `${casa12voltsBg}`;
        box3.querySelector("a").href =
          "https://ongverde.org/projeto-casa12volts.html/";
      }
    }
  }

  function AlternaBOX4(value) {
    if (currentIndexBox4 > 2) {
      currentIndexBox4 = 0;
    }
    if (currentIndexBox4 < 0) {
      currentIndexBox4 = 2;
    }

    const box4 = box4Ref.current;
    if (box4) {
      if (currentIndexBox4 === 0) {
        box4.querySelector("h3").textContent = "WWF-Brasil";
        box4.querySelector("p").textContent =
          "O projeto RESEX Solar gerou acesso a energia elétrica limpa para comunidades ribeirinhas da Amazonia Legal.";
        box4.style.backgroundImage = `url(${WWFBg})`;
        box4.querySelector("a").href =
          "https://panda.maps.arcgis.com/apps/Cascade/index.html?appid=9dc42b217722439495f5ae5d277a3a2b&_gl=1*90yjwl*_ga*MTQxMzY0MTg0MS4xNzI0ODc3MTUz*_ga_KSP2KDVW5X*MTcyNTE0MDkxMC40LjEuMTcyNTE0MTAzNi42MC4wLjA.";
      } else if (currentIndexBox4 === 1) {
        box4.querySelector("h3").textContent = "Instituto Ecológica";
        box4.querySelector("p").textContent =
          "Instituto Ecológica empreita a inauguração de uma usina bioenergética de álcool e ração animal.";
        box4.style.backgroundImage = `url(${EcologicaBg})`;
        box4.querySelector("a").href =
          "https://www.ecologica.org.br/bioenergia/";
      } else {
        box4.querySelector("h3").textContent = "Amigos do Bem";
        box4.querySelector("p").textContent =
          "Investimento em energia solar beneficia 62 famílias na região da Morada do Catimbau, no nordeste brasileiro.";
        box4.style.backgroundImage = `url(${AmigosBemBg})`;
        box4.querySelector("a").href =
          "https://www.amigosdobem.org/investimento-em-energia-solar-beneficia-5-mil-nordestinos-reduz-emissao-de-gas-e-preserva-mais-de-30-mil-arvores/#:~:text=Apenas%20no%20Vale%20do%20Catimbau,%20200%20placas%20solares%20geram%20energia";
      }
    }
  }

  return (
    <OngSectionContainer>
      <H2>ONGs dedicadas às Energias Renováveis</H2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ButtonContainer>
          <BtnNextBack ref={refBack} onClick={BackVoltar}>
            <ChevronLeft size={60} color="#ffff80" />
            <span>Veja Mais</span>
          </BtnNextBack>
        </ButtonContainer>

        <OngContainer>
          <CardArea>
            <Card ref={box1Ref}>
              <CardImg src={GambaBg} alt="Imagem da Ong" />
              <Overlay>
                <H3Card>Gambá</H3Card>
                <p>
                  A Organização Gambá distribuiu balas doces na rua como forma
                  de provocação à reflexão sobre energia nuclear na Bahia.
                </p>
                <a
                  target="_blank"
                  href="https://www.gamba.org.br/noticias/gamba-provoca-baianos-e-turistas-a-refletirem-sobre-o-nuclear-na-bahia"
                  rel="noreferrer noopener"
                >
                  <Button id="BOX1-button">Confira!</Button>
                </a>
              </Overlay>
            </Card>

            <Card ref={box2Ref}>
              <CardImg src={GreenpeaceBg} alt="Imagem da Ong" />
              <Overlay>
                <H3Card>Greenpeace</H3Card>
                <p>
                  Greenpeace protesta em plataforma petrolífera da Shell e
                  recebe protesto de US$ 8,6 milhões.
                </p>
                <a
                  target="_blank"
                  href="https://www.greenpeace.org/brasil/blog/greenpeace-sofre-processo-de-intimidacao-de-shell/"
                  rel="noreferrer noopener"
                >
                  <Button>Confira!</Button>
                </a>
              </Overlay>
            </Card>
          </CardArea>

          <CardArea>
            <Card ref={box3Ref}>
              <CardImg src={DomPixoteBg} alt="Imagem da Ong" />
              <Overlay>
                <H3Card>Instituto Dom Pixote</H3Card>
                <p>
                  O Instituto Dom Pixote intenta pioneiramente a instalação do
                  biogestor israelense HomeBiogas® no Brasil.
                </p>
                <a
                  target="_blank"
                  href="https://www.dompixote.org/noticias/conheca-a-homebiogas-e-o-projeto-rio-sustentavel/"
                  rel="noreferrer noopener"
                >
                  <Button>Confira!</Button>
                </a>
              </Overlay>
            </Card>

            <Card ref={box4Ref}>
              <CardImg src={EcologicaBg} alt="Imagem da Ong" />
              <Overlay>
                <H3Card>Instituto Ecológica</H3Card>
                <p>
                  Instituto Ecológica empreita a inauguração de uma usina
                  bioenergética de álcool e ração animal.
                </p>
                <a
                  target="_blank"
                  href="https://www.ecologica.org.br/bioenergia/"
                  rel="noreferrer noopener"
                >
                  <Button>Confira!</Button>
                </a>
              </Overlay>
            </Card>
          </CardArea>
        </OngContainer>

        <ButtonContainer>
          <BtnNextBack ref={refNext} onClick={NextAvancar}>
            <ChevronRight size={60} color="#ffff80" />
            <span>Veja Mais</span>
          </BtnNextBack>
        </ButtonContainer>
      </div>
    </OngSectionContainer>
  );
}

export default LayoutONG;
