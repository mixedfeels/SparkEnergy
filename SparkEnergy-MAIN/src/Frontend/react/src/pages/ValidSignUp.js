import React from "react";
import { CircleCheckBig } from "lucide-react";
import styled from "styled-components";
import Header from "../components/containers/Header";
import { Link } from "react-router-dom";

const PageContainer = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 9rem;

  @media (max-width: 950px) {
    margin-top: 9rem;
  }
`;

const ContentContainer = styled.div`
  background-color: #ffd700;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 550px;
  height: 50%;
  color: black;
  padding: 2rem 2rem;
  border-radius: 5px;
  overflow-x: hidden;
  margin: 0 auto;
  text-align: center;
  font-family: "Poppins", sans-serif;

  & > * + * {
    margin-top: 2rem;
  }

  @media (max-width: 564px) {
    width: 460px;
  }

  @media (max-width: 474px) {
    width: 400px;
  }

  @media (max-width: 414px) {
    width: 390px;
  }

  @media (max-width: 480px) {
    height: 70%;
  }
`;

const TitleContainer = styled.div`
  font-size: 1.2rem;

  @media (max-width: 564px) {
    font-size: 0.9rem;
  }
`;

const P = styled.p`
  font-size: 1rem;

  @media (max-width: 564px) {
    font-size: 0.8rem;
  }
`;

const Btns = styled.div`
  display: flex;
  width: 100%;
  & > * + * {
    margin-left: 1rem;
  }
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 4px;
  background-color: #000;
  color: #ffd700;
  padding: 7px 40px;
  width: 100%;

  &:active {
    transform: scale(0.98);
  }
`;

function ValidSignUp() {
  return (
    <PageContainer>
      <Header />
      <Container>
        <ContentContainer>
          <TitleContainer>
            <CircleCheckBig size={50} color="#000" />
            <h1>Bem-vindo à Nossa Comunidade!</h1>
          </TitleContainer>

          <P>
            Cadastro realizado com sucesso! Agradecemos por se juntar a nós.
            Agora, por favor, faça o login para acessar sua conta.
          </P>
          <Btns>
            <Button to="/login">Login</Button>
          </Btns>
        </ContentContainer>
      </Container>
    </PageContainer>
  );
}

export default ValidSignUp;
