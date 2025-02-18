import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const PostDiv = styled.div`
  width: 100%;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
  width: 100%;
`;

export const UserName = styled.div`
  text-align: center;
  margin-top: 5vh;
`;

export const UsernameText = styled.p`
  font-size: 3rem;
  font-family: "Expletus Sans";
  font-weight: 700;
  color: #ffc400;
`;

export const TextLocal = styled.p`
  font-weight: 600;
  display: flex;
  padding-left: 7px;
  font-size: 1.25rem;
  margin-top: 1rem;
`;

export const EditUserBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #ffc400;
  cursor: pointer;
`;

export const EditPasswordBtn = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
  color: #ffc400;
  font-size: 1rem;
  cursor: pointer;
`;
