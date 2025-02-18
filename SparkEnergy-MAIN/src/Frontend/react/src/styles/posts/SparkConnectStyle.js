import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div``;

export const SparkConnectContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  padding-top: 40px;
  flex-direction: column;

  @media (max-width: 950px) {
    margin-top: 17rem;
  }
`;

export const Reverse = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  align-items: center;
`;

export const Post = styled.div`
  width: 65%;
  height: auto;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  font-family: "Poppins", sans-serif;
  background-color: #fde00a;
  color: black;
  padding: 15px 25px;

  &:hover {
    box-shadow: rgba(255, 231, 88, 0.78) 0px 2px 10px 0px;
    transform: scale(1.02);
  }
`;

export const H1 = styled.h1`
  font-size: 10vw; /* Tamanho da fonte baseado na largura da viewport */
  background-image: linear-gradient(
    to right,
    #ffeb3b,
    #cddc39,
    #8bc34a,
    #4caf50
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

export const Title = styled.div`
  flex: 20%;
`;

export const H2intro = styled.h2`
  font-size: 2rem;
  font-family: "Expletus Sans", sans-serif;
  color: #fde00a;
  margin-top: 2rem;
`;

export const H2NoUser = styled.h2`
  font-size: 2rem;
  font-family: "Manjari", sans-serif;
  color: #fde00a;
  margin-top: 6rem;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Page = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const H2 = styled.h2`
  font-size: 1.3rem;
  cursor: pointer;
`;

export const Description = styled.div`
  flex: 60%;
  display: block; /* Mude para block ou flex */
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 15px 0;
  max-width: 100%; /* Garante que não exceda a largura do contêiner */
  font-family: "Manjari", sans-serif;
  cursor: pointer;
`;

export const TextDescription = styled.p`
  display: -webkit-box; /* Para suportar o truncamento em múltiplas linhas */
  -webkit-box-orient: vertical; /* Define a orientação do box */
  overflow: hidden; /* Oculta o texto que excede o limite */
  -webkit-line-clamp: 3; /* Número de linhas a serem exibidas */
  text-overflow: ellipsis; /* Adiciona '...' ao final */
  max-height: 4.5em; /* Altura máxima para 3 linhas (ajuste conforme necessário) */
`;

export const Username = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 593px) {
    flex-direction: column;
    align-items: start;

    & > * + * {
      margin-top: 1rem;
    }
  }
`;

export const UserContainer = styled.div`
  padding-right: 5px;
`;

export const SpanLocal = styled.span`
  font-weight: 600;
  display: flex;
  padding-left: 7px;
  font-size: 1rem;
`;

export const CommentDiv = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 5px;
  }
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  & > * + * {
    margin-left: 5px;
  }
`;

export const LikeButton = styled.button`
  border: none;
  cursor: pointer;

  background-color: #fde00a;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #ffff00, #32cd32);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &:active,
  &:hover {
    outline: 0;
  }

  &:hover span {
    background: none;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    min-width: 196px;
  }

  span {
    background-color: #000;
    padding: 10px 15px;
    text-align: center;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
    font-family: "Poppins", sans-serif;

    &:hover {
      color: black;
    }
  }
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 593px) {
    font-weight: bold;
  }
`;
