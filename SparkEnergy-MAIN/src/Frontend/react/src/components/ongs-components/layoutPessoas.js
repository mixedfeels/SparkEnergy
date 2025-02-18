import styled from "styled-components";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { H2, H3Card } from "../../styles/home/LayoutStyle";

const Container = styled.section`
  text-align: center;
  margin: 200px 0;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    padding-bottom: 6rem;
  }
`;

const Carrosel = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: var(--main-radius);
  display: flex;
  overflow: hidden;
`;

const CarroselPeople = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  flex: none;
  padding-left: 70px;
`;

const PeopleAux = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1124px) {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

  @media (max-width: 1106px) {
    margin-left: 0;
  }
`;

const People = styled.div`
  height: 300px;
  width: 400px;
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
      height: 180%;
      overflow: visible;
    }
  }

  @media (max-width: 1106px) {
    height: 245px;
    width: 290px;
  }
`;

const PeopleImg = styled.img`
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
  text-align: center;
  font-size: 14px;
  transition: height 0.5s;

  p {
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    margin-top: 10px;
    text-decoration: none;
    font-size: 14px;
  }

  @media (max-width: 1106px) {
    height: 100%;
    padding: 0;
  }
`;

const BtnContainerNext = styled.div`
  z-index: 999;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  right: 0;

  @media (max-width: 1106px) {
    display: none;
  }
`;

const BtnContainerPrev = styled.div`
  z-index: 999;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  left: 0;

  @media (max-width: 1106px) {
    display: none;
  }
`;

const BtnNext = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1106px) {
    display: none;
  }
`;

const BtnPrev = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1106px) {
    display: none;
  }
`;

function LayoutPessoas() {
  const carrosselImagesRef = useRef();
  const prevButtonRef = useRef();
  const nextButtonRef = useRef();

  useEffect(() => {
    var currentIndex = 0;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;
    const carrosselImages = carrosselImagesRef.current;

    function showImage(index) {
      const offset = -index * 560;
      if (carrosselImagesRef.current) {
        carrosselImages.style.transform = `translateX(${offset}px)`;
      }
    }

    nextButton.addEventListener("click", () => {
      currentIndex = currentIndex === 0 ? 4 : currentIndex - 1;
      showImage(currentIndex);
    });

    prevButton.addEventListener("click", () => {
      currentIndex = currentIndex === 4 ? 0 : currentIndex + 1;

      showImage(currentIndex);
    });
  });

  const people = [
    {
      title: "Carlos Nobre",
      content:
        "Um dos climatologistas mais renomados do Brasil, Carlos Nobretem sido uma voz ativa na promoção de energias renováveis e na luta contra as mudanças climáticas.",
      imageUrl:
        "https://th.bing.com/th/id/R.c0eb1e89b29fbe268b9820f5480ec433?rik=%2b7R1%2bxvnPpXEsw&pid=ImgRaw&r=0",
    },

    {
      title: "Elon Musk",
      content:
        "Fundador da Tesla e da SolarCity, Musk tem sido um grande defensor da energia solar e das baterias de armazenamento de energia, ajudando a popularizar essas tecnologias em escala global.",
      imageUrl:
        "https://images.news9live.com/wp-content/uploads/2023/08/elon_musk_x_twitter_lawsuit_afp.jpg?w=1200&enlarge=true",
    },

    {
      title: "Christiana Figueres",
      content:
        "Ex-secretária executiva da Convenção-Quadro das Nações Unidas sobre a Mudança do Clima (UNFCCC), Figueres foi uma das principais arquitetas do Acordo de Paris.",
      imageUrl:
        "https://images.marinelink.com/images/maritime/ristiana-figueres-executive-secretary-of-55606.jpg",
    },
    {
      title: "Fatih Birol",
      content:
        "Diretor executivo da Agência Internacional de Energia (IEA), Birol tem promovido a transição para energias limpas e renováveis em nível global.",
      imageUrl:
        "https://api.time.com/wp-content/uploads/2022/09/Fatih-Birol-climate.jpg",
    },

    {
      title: "Mariana Mazzucato",
      content:
        "Economista e autora, Mazzucato tem defendido o papel do governo na inovação e no financiamento de tecnologias verdes, incluindo energias renováveis.",
      imageUrl:
        "https://th.bing.com/th/id/R.222764976abbb1d94369ea9096be6607?rik=mJAIytoX7iUsFA&pid=ImgRaw&r=0",
    },

    {
      title: "Al Gore",
      content:
        "Ex-vice-presidente dos EUA, Gore tem sido uma das vozes mais influentes no combate às mudanças climáticas e na promoção de energias renováveis.",
      imageUrl:
        "https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/goreinternal649846.jpg?ve=1&tl=1?ve=1&tl=1",
    },

    {
      title: "Greta Thunberg",
      content:
        "Jovem ativista climática sueca, Thunberg chamou a atenção global para a crise climática e a necessidade urgente de reduzir o uso de combustíveis fósseis.",
      imageUrl:
        "https://th.bing.com/th/id/R.058ef105bce1622d48a046d72b2d5820?rik=%2fKShsVWfS36BhQ&pid=ImgRaw&r=0",
    },
    {
      title: "Rachel Kyte",
      content:
        "Ex-CEO da Sustainable Energy for All (SEforALL) e reitora da Fletcher School, Rachel Kyte é uma defensora da transição energética global e da universalização do acesso à energia limpa.",
      imageUrl:
        "https://th.bing.com/th/id/OIP.4rDEjsVbm125H8fGNwCngQHaFB?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <Container>
      <H2>Pessoas Marcantes no Assunto de Energia Renovável</H2>
      <Carrosel>
        <BtnContainerPrev>
          <BtnPrev ref={nextButtonRef}>
            <ChevronLeft size={60} color="#ffff80" />
          </BtnPrev>
        </BtnContainerPrev>
        <CarroselPeople ref={carrosselImagesRef}>
          <PeopleAux>
            {people.map((person, index) => {
              return (
                <People key={index}>
                  <PeopleImg src={person.imageUrl} alt="" />

                  <Overlay>
                    <H3Card>{person.title}</H3Card>
                    <p>{person.content}</p>
                  </Overlay>
                </People>
              );
            })}{" "}
          </PeopleAux>
        </CarroselPeople>

        <BtnContainerNext>
          <BtnNext ref={prevButtonRef}>
            <ChevronRight size={60} color="#ffff80" />
          </BtnNext>
        </BtnContainerNext>
      </Carrosel>
    </Container>
  );
}

export default LayoutPessoas;
