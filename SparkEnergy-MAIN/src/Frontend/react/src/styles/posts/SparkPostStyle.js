import styled from "styled-components";

export const PageContainer = styled.div`
  //...
  background-color: #0b0b0b;

  width: 100%;
  overflow-x: hidden;
`;

export const OverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  font-family: "Poppins", sans-serif;
  height: 100vh;
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

export const Content = styled.div`
  h2 {
    font-size: 2rem;
    color: var(--line-border-empty);
    font-weight: 700;
    font-style: normal;
    text-align: center;
    padding: 2rem 0;
    color: #383838;
  }

  @media (max-width: 564px) {
    h2 {
      font-size: 1.5rem;
    }
`;

export const Btns = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
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

  span {
    margin-left: 3px;
  }
`;

export const ButtonNext = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 4px;
  background-color: #005700;
  color: #ffd700;
  padding: 5px 40px;
  width: 100%;

  &:active {
    outline: none;
    transform: scale(0.98);
  }

  span {
    margin-right: 5px;
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
  width: 35%;
  padding: 5px 0;

  &:active {
    outline: none;
    transform: scale(0.98);
  }

  span {
    margin-right: 3px;
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
