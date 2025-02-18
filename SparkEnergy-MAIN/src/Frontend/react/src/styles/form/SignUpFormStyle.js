import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  font-family: "Poppins", sans-serif;
`;

export const EntryArea = styled.div`
  position: relative;
  height: 47px;
  line-height: 51px;
  font-family: inherit;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  position: absolute;
  width: 100%;
  outline: none;
  font-size: 1.1em;
  padding: 0 15px;
  line-height: 44px;
  border-radius: 10px;
  border: 2px solid #00000091;
  background: transparent;
  transition: 0.1s ease;
  z-index: 1111;

  &:focus,
  &:valid {
    color: #000;
    border: 2px solid #000;
  }

  &:focus ~ div,
  &:valid ~ div {
    color: #000;
    height: 20px;
    line-height: 30px;
    transform: translate(-20px, -15px) scale(0.88);
    z-index: 1111;
  }

  &.invalid {
    border: 2px solid red;
  }

  ${({ $hasError }) =>
    $hasError &&
    `
      &:focus,
      &:valid {
        color: red;
        border: 2px solid red;
      }


      &:focus ~ div,
      &:valid ~ div {
        color: red;
        height: 20px;
        line-height: 30px;
        transform: translate(-20px, -15px) scale(0.88);
        z-index: 1111;
      }
  `}
`;

export const Select = styled.select`
  position: absolute;
  width: 100%;
  outline: none;
  font-size: 1.1em;
  padding: 11px 12px;
  border-radius: 10px;
  border: 2px solid #00000091;
  background: transparent;
  transition: 0.1s ease;
  z-index: 1111;

  &:focus,
  &:valid {
    color: #000;
    border: 2px solid #000;
  }

  &:focus ~ div,
  &:valid ~ div {
    color: #000;
    height: 20px;
    line-height: 30px;
    transform: translate(-20px, -15px) scale(0.88);
    z-index: 1111;
  }

  &.invalid {
    border: 2px solid red;
  }

  ${({ $hasError }) =>
    $hasError &&
    `
      &:focus,
      &:valid {
        color: red;
        border: 2px solid red;
      }


      &:focus ~ div,
      &:valid ~ div {
        color: red;
        height: 20px;
        line-height: 30px;
        transform: translate(-20px, -15px) scale(0.88);
        z-index: 1111;
      }
  `}
`;

export const DivLabel = styled.div`
  position: absolute;
  left: 7px;
  font-size: 1.15em;
  color: #000000b2;
  padding: 0 5px;
  margin: 0 15px;
  transition: 0.2s ease;
  background-color: #fff;
  height: 35px;

  @media (max-width: 564px) {
    font-size: 1em;
  }
`;

export const ErrorMessage = ({ error }) => {
  if (!error) return null;

  switch (error.type) {
    case "required":
      return <P>{error.message}</P>; // Exibe a mensagem para erro do tipo "required"
    case "minLength":
      return <P>{error.message}</P>; // Exibe a mensagem para erro do tipo "minLength"
    case "validate":
      return <P>{error.message}</P>; // Exibe a mensagem para erro do tipo "validate"
    case "pattern":
      return <P>{error.message}</P>;
    default:
      return <P>{error.message}</P>; // Exibe mensagem genérica para outros erros
  }
};

const P = styled.p`
  color: red;
`;

export const Dados = styled.div`
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

export const H4 = styled.h4`
  font-size: 1.5rem;
`;

export const PSaveData = styled.span`
  color: #005700;
  font-weight: 500;
`;

export const PublishP = styled.p`
  margin-bottom: 0.5rem;
`;

export const PublishTextArea = styled.textarea`
  width: 100%;
  outline: none;
  font-size: 1em;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  font-family: "Poppins", sans-serif;
  background: transparent;
  resize: none;
  height: 97px;
  color: #005700;
`;

export const ButtonShowPassword = styled.button`
  position: absolute;
  z-index: 9999;
  right: 14px;
  top: 13px;
  border: none;
  background: transparent;
  font-size: 1rem;
  cursor: pointer;
  font-family: "Poppins", sans-serif;

  ${({ $hasError }) =>
    $hasError &&
    `
        color: red;
  `}

  @media (max-width: 564px) {
    font-size: 0.9em;
  }
`;

export const PLogin = styled.div`
  margin: 1rem 0;

  & > * + * {
    margin-top: 1rem;
  }
`;

export const LinkPage = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
