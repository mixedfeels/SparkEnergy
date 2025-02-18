import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/containers/Header";
import { House } from "lucide-react";

const Page = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  margin-top: 4rem;

  & > * + * {
    margin-top: 2rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 4rem;
  margin-left: 1rem;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
`;

const P = styled.p``;

function PageNotFound() {
  return (
    <div>
      <Header />
      <Container>
        <TitleContainer>
          <H1>PageNotFound :/</H1>
        </TitleContainer>
        <div>
          <H3>
            Vá para a Página inicial:
            <P>
              <Page to="/">
                <House size={30} />
                Página inicial
              </Page>
            </P>
          </H3>
        </div>
      </Container>
    </div>
  );
}

export default PageNotFound;
