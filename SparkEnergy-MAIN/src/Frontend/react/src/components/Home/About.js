import {
  AboutContainer,
  AboutContent,
  IntroductionContainer,
  Introduction,
  IntroTitle,
  IntroP,
  WhatIs,
  WhatSubTitle,
  WhatH3,
  WhatP2,
  WhatPcontainer,
  WhatContainer,
} from "../../styles/home/AboutStyle";
import { UsersRound, HeartHandshake, Earth, HandHeart } from "lucide-react";

function About() {
  const aboutContents = [
    {
      title: "Objetivo",
      content:
        "A SparkEnergy visa promover o acesso universal, confiável e acessível à energia, ouvindo as comunidades sobre suas dificuldades. Coletando essas informações, a organização busca gerar relatórios que ajudem ONGs e outras instituições a transformar o cenário energético, alinhando-se ao Objetivo 7.1 da ODS 7 da ONU: 'Garantir o acesso universal, confiável, moderno e a preços acessíveis a serviços de energia.'",
      icon: <UsersRound size={140} color="#C7A700" strokeWidth={1.5} />,
    },
    {
      title: "Conexão",
      content:
        "Na SparkEnergy, a conexão vai além da internet, buscando unir pessoas, ideias e soluções para problemas de acesso à energia. O espaço incentiva a troca de experiências, denúncias e sugestões, criando uma rede de apoio entre moradores de diferentes bairros e ajudando a mapear a realidade energética das comunidades.",
      icon: <Earth size={140} color="#C7A700" strokeWidth={1.5} />,
    },
    {
      title: "Cooperação",
      content:
        "A cooperatividade é fundamental para um futuro sustentável. Ao compartilhar informações sobre a situação energética, os participantes se tornam parte de uma rede colaborativa. A SparkEnergy oferece um espaço para que todos possam colaborar, sugerir melhorias e denunciar problemas, buscando um acesso mais justo e acessível à energia.",
      icon: <HeartHandshake size={140} color="#C7A700" strokeWidth={1.5} />,
    },
    {
      title: "Solidariedade",
      content:
        "A solidariedade impulsiona a SparkEnergy, criando um ambiente onde as pessoas podem se apoiar mutuamente. Ao compartilhar experiências e sugestões, cada um contribui para a comunidade e para um movimento global que busca garantir o acesso à energia limpa e acessível. Juntos, podemos construir um futuro mais justo para todos.",
      icon: <HandHeart size={140} color="#C7A700" strokeWidth={1.5} />,
    },
  ];

  return (
    <section>
      <AboutContainer id="about">
        <AboutContent>
          <IntroductionContainer>
            <Introduction>
              <IntroTitle>SparkEnergy</IntroTitle>
              <IntroP>
                Bem-vindo ao SparkEnergy! Agradecemos por sua visita e por se
                unir a nós na busca por soluções energéticas mais sustentáveis e
                acessíveis para todos. Aqui, você tem a oportunidade de
                compartilhar seus feedbacks, denúncias e sugestões sobre a
                qualidade e o acesso à energia em sua comunidade. Suas
                contribuições são fundamentais para gerarmos relatórios que
                ajudarão ONGs a desenvolver projetos que promovam energia limpa,
                acessível e confiável. Juntos, podemos impulsionar um futuro
                onde todos tenham acesso a energia para todos!
              </IntroP>
            </Introduction>
            <WhatIs>
              <WhatSubTitle>{`{ O que é a SparkEnergy? }`}</WhatSubTitle>

              {aboutContents.map((content, index) => (
                <WhatContainer key={index}>
                  <WhatH3>{content.title}</WhatH3>
                  <WhatPcontainer>
                    {content.icon}
                    <WhatP2>{content.content}</WhatP2>
                  </WhatPcontainer>

                  <hr />
                </WhatContainer>
              ))}
            </WhatIs>
          </IntroductionContainer>
        </AboutContent>
      </AboutContainer>
    </section>
  );
}

export default About;
