import styled from "styled-components";

export const PageContainer = styled.div`
  overflow: hidden;
`;

export const OverlayContainer = styled.div`
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  padding-top: 13vh;

  @media (max-width: 950px) {
    height: 124vh;
    align-items: end;
    font-family: "Poppins", sans-serif;
    padding-bottom: 5vh;
  }
`;

export const Container = styled.div`
  width: 550px;
  background-color: #fff;
  color: black;
  padding: 1rem 2rem;
  border-radius: 5px;
  overflow-x: hidden;
  margin: 0 auto;

  @media (max-width: 950px) {
    margin-top: 10rem;
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
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-color: #00000038;
    height: 4px;
    width: 100%;
    top: 50%;
    left: 0;
    z-index: 1;
    transform: translateY(-50%);
  }
`;

export const Circle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active", // Filtra a prop 'active' para não ser passada para o DOM
})`
  background-color: #000;
  color: #fff;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 1;

  ${({ $active }) =>
    $active &&
    `
    border-color: var(--line-border-empty);
    color: #ffd700;
    background-color: #005700;
  `}
`;

export const H1 = styled.h1`
  font-size: 3rem;
  color: var(--line-border-empty);
  font-weight: 700;
  text-align: center;

  color: #383838;

  @media (max-width: 564px) {
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    padding: 2rem 0;
    color: #000;
    font-family: "Expletus Sans", sans-serif;
  }
  @media (max-width: 564px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const ButtonPrev = styled.button`
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 4px;
  background-color: #005700;
  color: #ffd700;
  width: 25%;
  padding: 5px 0;

  &:active {
    outline: none;
    transform: scale(0.98);
  }

  ${({ disabled }) =>
    disabled &&
    `
      outline: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      border-radius: 4px;
      color: #000000a6;
      padding: 4px 40px;
      background-color: #a6a6a64f;
      cursor: not-allowed;
  `}
`;

export const ButtonNext = styled.button`
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 4px;
  background-color: #005700;
  color: #ffd700;
  width: 25%;
  padding: 5px 0;

  &:active {
    outline: none;
    transform: scale(0.98);
  }
`;

export const ButtonPublish = styled.button`
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 4px;
  background-color: #000;
  color: #ffd700;
  padding: 5px 40px;
  width: 50%;
  font-weight: 500;

  &:active {
    outline: none;
    transform: scale(0.98);
  }
`;

export const ButtonBlog = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 4px;
  background-color: #000;
  color: #ffd700;
  padding: 5px 40px;
  width: 100%;

  &:active {
    outline: none;
    transform: scale(0.98);
  }
`;
