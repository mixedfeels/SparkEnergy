import styled from "styled-components";

export const OdsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

export const TitleH1 = styled.h1`
  font-size: 2.5rem;
  font-family: "Expletus Sans", sans-serif;
  background-image: linear-gradient(to right, #ffff00, #32cd32);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: 5rem;
  text-align: center;
`;

export const OdsDiv1 = styled.div`
  margin-bottom: 2rem;
  background-color: #0087ff7d;
  padding: 1rem;

  img {
    width: 20vw;
    height: 15vh;
    border-radius: 8px;
  }
`;

export const OdsDiv2 = styled.div`
  display: flex;
  margin-bottom: 2rem;
  background-color: #ffff0026;
  padding: 1rem;

  img {
    width: 20vw;
    height: 15vh;
    border-radius: 8px;
  }
`;
export const OdsDivChild = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 600px) {
    flex-direction: column;

    img {
      width: 79vw;
      height: 20vh;
    }

    div {
      text-align: center;
      width: 87%;
      margin-right: 0;
      margin-top: 1rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const OdsDivChild2 = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 600px) {
    flex-direction: column;

    img {
      width: 79vw;
      height: 20vh;
    }

    div {
      text-align: center;
      width: 87%;
      margin-left: 0;
      margin-top: 1rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const OdsContent1 = styled.div`
  margin-right: 1rem;

  h2 {
    color: #89e3ff;
  }
`;

export const OdsContent2 = styled.div`
  margin-left: 1rem;

  h2 {
    color: #ffc400;
  }
`;

export const OdsObjetivosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  width: 90%;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    color: #ffc400;
  }

  & > * + * {
    margin-left: 2rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    & > * + * {
      margin-top: 2rem;
    }
  }
`;

export const ObetivosTitle = styled.div`
  flex: 35%;

  @media (max-width: 600px) {
    text-align: center;
  }
`;
export const ObejtivosList = styled.div`
  flex: 65%;
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid yellow;

  @media (max-width: 600px) {
    text-align: center;
    border-top: 1px solid yellow;
    border-left: 0px;
    margin-left: 0;
  }
`;

export const Objetivos = styled.div`
  width: 50%;
  background-color: #ffc400;
  color: black;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;

  h3 {
    margin-bottom: 3px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const List = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
