import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 40vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  & > * + * {
    margin-top: 2rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  /* border: 1px solid red; */

  & > * + * {
    margin-top: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 7px;
  border-radius: 8px;
`;

export const BtnContainer = styled.div`
  width: 100%;
  /* border: 1px solid red; */
`;

export const Btn = styled.button`
  padding: 7px;
`;
