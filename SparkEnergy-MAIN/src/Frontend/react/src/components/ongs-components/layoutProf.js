import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  LProfWrapper,
  LProfContainer,
  LProfBox,
  Prof,
  LProf,
  ProfButton,
  LProfH3,
  LProfImg,
  LProfContent,
  LProfP,
  H2,
} from "../../styles/home/LayoutStyle";

function LayoutProf() {
  // Estado para o índice do botão aberto
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    // Se o índice clicado já estiver aberto, fecha-o, caso contrário, abre o novo
    setOpenIndex(openIndex === index ? null : index);
  };

  const professions = [
    {
      title: "Tecnólogo em Sistemas Elétricos",

      content:
        "Responsável por projetar e efetuar manutenções em sistemas de geração e distribuição de energia. Com conhecimentos em tecnologias eólicas, solares e de biomassa, este profissional tem uma demanda crescente no mercado de trabalho.",
      imageUrl:
        "https://inap.com.br/wp-content/uploads/2022/04/tecnico-em-eletrotecnica-1-1024x542.jpg",
    },

    {
      title: "Tecnólogo em Biocombustíveis",

      content:
        "Trabalha na área de pesquisa e desenvolvimento de biocombustíveis, atuando sobre conhecimentos em biotecnologia, química e processos industriais.",
      imageUrl:
        "https://i1.rgstatic.net/ii/profile.image/838001072562176-1576806433372_Q512/Leonardo-Selvenca.jpg",
    },

    {
      title: "Engenheiro Ambiental",

      content:
        "Profissional que administra a implementação de projetos ecologicamente corretos. Atua sob o planejamento e desenvolvimento de infraestruturas para fontes renováveis como solar, eólica, hidrelétrica e biomassa.",
      imageUrl:
        "https://senaies.com.br/wp-content/uploads/2022/01/Engenheiro-Ambiental-scaled.jpg",
    },
    {
      title: "Técnico em Hidrologia",
      content:
        "Profissional que administra a implementação de projetos ecologicamente corretos. Atua sob o planejamento e desenvolvimento de infraestruturas para fontes renováveis como solar, eólica, hidrelétrica e biomassa.",
      imageUrl:
        "https://www.laboneconsultoria.com.br/wp-content/uploads/2022/08/Principais-disciplinas-do-curso-de-Engenharia-H%C3%ADdrica.jpg",
    },

    {
      title: "Engenheiro de Software",

      content:
        "Atuam no desenvolvimento de sistemas de monitoramento e previsão na produção das usinas elétricas.",
      imageUrl: "https://www.undb.edu.br/hubfs/shutterstock_1155187792.jpg",
    },

    {
      title: "Especialista em Controle Ambiental",

      content:
        "Perito em análise e desenvolvimento de medidas ambientalmente corretas que ajudem usinas de energia renovável a mitigarem seus impactos ambientais.",
      imageUrl:
        "https://th.bing.com/th/id/R.fcf4e83517a0e69767070bf6f4e4daba?rik=vaO2O0AI5wz10Q&pid=ImgRaw&r=0",
    },

    {
      title: "Técnico em Geoprocessamento",

      content:
        "Analisa o potencial que uma determinada área tem para a instalação de uma espécie de geração de energia renováveis.",
      imageUrl:
        "https://network.grupoabril.com.br/wp-content/uploads/sites/4/2017/09/meioambiente.jpg?quality=70&strip=info",
    },
  ];

  return (
    <LProfWrapper>
      <H2>Profissões na Área de Energias Renováveis</H2>
      <LProfContainer>
        <LProfBox>
          {professions.map((profession, index) => (
            <Prof key={index}>
              <ProfButton onClick={() => toggleMenu(index)}>
                <LProfH3>{profession.title}</LProfH3>

                {openIndex === index ? (
                  <ChevronUp color="#f6e24b" />
                ) : (
                  <ChevronDown color="#f6e24b" />
                )}
              </ProfButton>

              <LProf $isOpen={openIndex === index}>
                <LProfContent>
                  <LProfP>{profession.content}</LProfP>
                  <LProfImg src={profession.imageUrl} alt={profession.title} />
                </LProfContent>
              </LProf>
            </Prof>
          ))}
        </LProfBox>
      </LProfContainer>
    </LProfWrapper>
  );
}

export default LayoutProf;
