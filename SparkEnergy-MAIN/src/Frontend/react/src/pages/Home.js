import styled from "styled-components";
import Header from "../components/containers/Header";
import SectionHeader from "../components/header-components/SectionHeader";
import Footer from "../components/containers/Footer";

import About from "../components/Home/About";
import Services from "../components/Home/Services";
import TypesEnergy from "../components/Home/TypesEnergy";
import Ongs from "../components/Home/Ongs";
import Ods from "../components/Home/Ods";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainContainer = styled.div``;

const ContainerDivisor = styled.div`
  margin-bottom: 10vh;

  & > * + * {
    margin-top: 25vh;
  }

  @media (max-width: 600px) {
    & > * + * {
      margin-top: 35vh;
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Header />
      <SectionHeader />
      <main>
        <MainContainer>
          <ContainerDivisor>
            <About />
            <Services />
          </ContainerDivisor>
          <Ods />
          <TypesEnergy />
          <Ongs />
        </MainContainer>
      </main>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
