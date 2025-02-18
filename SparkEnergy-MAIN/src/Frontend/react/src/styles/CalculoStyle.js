import styled from "styled-components";

export const Camp = styled.input`
  border-radius: 10px;
  padding: 0.5rem;
  width: 125px;
  border: none;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  font-size: 15px;
  font-weight: bold;
  background-color: #ffe100;
  color: #000;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease;
  margin-bottom: 1.5rem;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CalculoContainer = styled.div`
    margin: 0;
    text-align: center;
    justify-content: center;
    box-sizing: border-box;
` 

export const CalculoEnergy = styled.div`
    margin: 0;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
`
export const CalculoInfo = styled.div`
    margin: 0;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
`
export const CalculoDesc = styled.div`
    align-items: center;
    text-align: left;
    display: flex;
    flex-direction: column;
`

export const CalculoInfo2 = styled.div`
    margin: 0;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 5rem;
`
export const EnergiaEolica = styled.div`
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
`

export const EnergiaEolicaList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-bottom: 2rem;
`

export const EnergiaEolicaComp = styled.div`
  align-items: center;
  text-align: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`