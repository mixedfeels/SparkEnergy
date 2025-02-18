import React from "react";

import {
  OdsSection,
  TitleH1,
  OdsDiv1,
  OdsDiv2,
  OdsContent1,
  OdsContent2,
  OdsObjetivosContainer,
  ObetivosTitle,
  ObejtivosList,
  OdsDivChild,
  OdsDivChild2,
  Objetivos,
  List,
} from "../../styles/home/OdsStyle";

function Ods() {
  return (
    <OdsSection id="ods">
      <TitleH1>Tudo Sobre Energia Limpa e Acessível</TitleH1>
      <div>
        <OdsDiv1>
          <OdsDivChild>
            <img
              src="https://www.unicef.org/brazil/sites/unicef.org.brazil/files/styles/hero_desktop/public/ods_hero_teaser.png.webp?itok=3gsFxWyL"
              alt=""
            />
            <OdsContent1>
              <h2>
                O que são os Objetivos de Desenvolvimento Sustentável (ODS) da
                ONU?
              </h2>

              <p>
                Os Objetivos de Desenvolvimento Sustentável (ODS) foram
                estabelecidos pela Organização das Nações Unidas (ONU) em 2015
                como uma agenda universal para guiar o desenvolvimento
                sustentável até 2030. Eles fazem parte da Agenda 2030 da ONU,
                que visa erradicar a pobreza, proteger o meio ambiente e
                promover a paz e a prosperidade. Ao todo, são 17 objetivos
                principais, acompanhados de 169 metas específicas que abordam as
                questões globais mais urgentes, incluindo a desigualdade social,
                o uso dos recursos naturais e a mitigação das mudanças
                climáticas.
              </p>
            </OdsContent1>
          </OdsDivChild>
        </OdsDiv1>

        <OdsDiv2>
          <OdsDivChild2>
            <div>
              <img
                src="https://unifor.br/documents/20143/5837664/7_energia_limpa_e_acessivel.png/cb9271a1-beb3-ade5-0937-248af33e8c3a?t=1650458272028"
                alt=""
              />
            </div>

            <OdsContent2>
              <h2>O que é a ODS 7 - Energia Limpa e Acessível?</h2>

              <p>
                O Objetivo de Desenvolvimento Sustentável 7 (ODS 7) visa
                “Garantir acesso a energia acessível, confiável, sustentável e
                moderna para todos”. Esse objetivo é um compromisso de promover
                uma transição energética global para fontes de energia renovável
                e sustentáveis, com a inclusão de energias como solar, eólica e
                biomassa. A ODS 7 reconhece que o acesso a energia é essencial
                para o desenvolvimento socioeconômico e para a melhoria da
                qualidade de vida, especialmente nas comunidades que ainda
                enfrentam limitações de acesso.
              </p>
            </OdsContent2>
          </OdsDivChild2>
        </OdsDiv2>

        <OdsObjetivosContainer>
          <ObetivosTitle>
            <h2>Objetivos da ODS 7</h2>
            <p>
              A ODS 7 é uma das metas globais estabelecidas pela ONU, com foco
              em assegurar o acesso universal e sustentável à energia até 2030.
              Confira os principais objetivos dessa ODS:
            </p>
          </ObetivosTitle>

          <ObejtivosList>
            <List>
              <Objetivos>
                <h3>1. Acesso Universal à Eletricidade</h3>
                <p>
                  <b>Objetivo:</b> Garantir que todas as pessoas, em todas as
                  regiões do mundo, tenham acesso à eletricidade.
                </p>
                <p>
                  <b>Ações:</b> Incentivo a políticas que expandam redes
                  elétricas, especialmente em áreas rurais e vulneráveis.
                </p>
              </Objetivos>

              <Objetivos>
                <h3>2. Eficiência Energética</h3>
                <p>
                  <b>Objetivo:</b> Dobrar a taxa de melhoria da eficiência
                  energética, minimizando desperdícios.
                </p>
                <p>
                  <b>Ações:</b> Políticas de eficiência para setores de
                  transporte, indústria e construção.
                </p>
              </Objetivos>
            </List>

            <List>
              <Objetivos>
                <h3>3. Aumento de Energias Renováveis</h3>
                <p>
                  <b>Objetivo:</b> Aumentar o uso de energias renováveis, como
                  solar, eólica e hidrelétrica, na matriz energética global.
                </p>
                <p>
                  <b>Ações:</b> Investimentos em tecnologias que possibilitem
                  maior captação e armazenamento de energias limpas.
                </p>
              </Objetivos>

              <Objetivos>
                <h3>
                  4. Promoção de Tecnologias e Infraestruturas Sustentáveis
                </h3>
                <p>
                  <b>Objetivo:</b> Ajudar países em desenvolvimento a adotar
                  tecnologias sustentáveis e reduzir o uso de combustíveis
                  fósseis.
                </p>
                <p>
                  <b>Ações:</b> Apoio para a criação de infraestruturas que
                  facilitem a transição para energias renováveis.
                </p>
              </Objetivos>
            </List>

            <List>
              <Objetivos style={{ width: "100%" }}>
                <h3>
                  5. Incentivar a Educação e Conscientização sobre Energia Limpa
                </h3>
                <p>
                  <b>Objetivo:</b> Aumentar a conscientização e o conhecimento
                  da população sobre os benefícios e a importância do uso de
                  energias renováveis, além de práticas de consumo sustentável
                  de energia.
                </p>
                <p>
                  <b>Ações:</b> Apoiar colaborações que promovam a
                  conscientização e informem sobre as inovações em energia
                  sustentável para comunidades e regiões menos informadas.
                </p>
              </Objetivos>
            </List>
          </ObejtivosList>
        </OdsObjetivosContainer>
      </div>
    </OdsSection>
  );
}

export default Ods;
