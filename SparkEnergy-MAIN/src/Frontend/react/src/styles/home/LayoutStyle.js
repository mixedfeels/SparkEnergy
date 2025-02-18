import styled from "styled-components";

// ==================================== Global ==============================================

export const H2 = styled.h2`
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
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

// =================================== Layout Prof ========================================

export const LProfWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const LProfContainer = styled.div`
  /* border: 1px solid red; */
  width: 700px;
  text-align: center;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const LProfBox = styled.div``;

export const Prof = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #333;
  margin-top: 2rem;
`;

export const LProf = styled.div`
  display: ${({ $isOpen }) =>
    $isOpen ? "block" : "none"}; /* Controla a visibilidade */
`;

export const ProfButton = styled.button`
  background: none;
  color: white;
  border: none;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid blue; */
  width: 100%;
`;

export const LProfContent = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;

  @media (max-width: 600px) {
    flex-direction: column;

    p {
      margin-bottom: 1rem;
    }
  }
`;

export const LProfH3 = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

export const LProfP = styled.p`
  text-align: left;
`;

export const LProfImg = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 8px;
`;

// ======================================== Card ==============================================

export const H3Card = styled.h3`
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 80%;
  font-family: bebas neue;
  font-size: 2rem;

  @media (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;
