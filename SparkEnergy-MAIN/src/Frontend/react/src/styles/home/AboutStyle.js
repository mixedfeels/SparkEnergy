import styled from "styled-components";
import { Link } from "react-router-dom";

// About

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #010201;
`;

export const AboutContent = styled.div`
  margin: 0 auto;
  width: 85%;
  /* border: 0.5px solid red; */
  & > * + * {
    margin-top: 10rem;
  }
`;

// ==============================================

// Introduction

export const IntroductionContainer = styled.div`
  /* border: 0.5px solid yellow; */
  padding-top: 6rem;

  & > * + * {
    margin-top: 15rem;
  }
`;

export const Introduction = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 70px;
  font-family: "Expletus Sans", sans-serif;
`;

export const IntroTitle = styled.h1`
  font-size: 12vw; /* Tamanho da fonte baseado na largura da viewport */
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

export const IntroP = styled.p`
  font-size: 2rem;
  /* color: #d1c4e9; // Lavanda */
  color: #919191; // Cinza-escuro
  font-family: "Manjari", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

// ==============================================

// What is

export const WhatContainer = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
`;

export const WhatIs = styled.div`
  // ...
`;

export const WhatSubTitle = styled.h2`
  font-size: 2rem;
  font-family: "Expletus Sans", sans-serif;
  color: #f6d02f;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const WhatH3 = styled.h3`
  color: #f9ebae;
  font-size: 1.7rem;
  font-family: "Expletus Sans", sans-serif;
`;

export const WhatP2 = styled.p`
  color: #faf3c0;
  font-size: 1.25rem;
  font-family: "Manjari", sans-serif;
  width: 70%;
  margin-left: 1rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const WhatPcontainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    padding-bottom: 1rem;
  }
`;

// ==============================================

// Button to NewPost

export const ButtonContainer = styled.div`
  /* border: 0.5px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 78vh;
  gap: 3rem;
`;

export const ButtonH2 = styled.h2`
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

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(144deg, #ffff00, #ffff8f 50%, #32cd32);
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
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;

    &:hover {
      color: black;
    }
  }
`;
