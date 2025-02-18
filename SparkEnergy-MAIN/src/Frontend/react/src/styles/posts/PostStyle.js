import styled from "styled-components";

export const PostPage = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  padding: 2rem;
  & > * + * {
    margin-left: 1rem;
  }
  font-family: "Poppins", sans-serif;

  @media (max-width: 1095px) {
    flex-direction: column;
  }
`;

// export const PostData = styled.div``;

export const PostUser = styled.div`
  flex: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  padding: 2rem;
  background-color: #fde00a;
  color: black;
  border-radius: 20px;
  width: 60%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  position: relative;

  @media (max-width: 1095px) {
    width: 100%;
  }
`;

export const PostComment = styled.div`
  flex: 40%;
  padding: 2rem;
  border-radius: 20px;
  width: 40%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  border: 5px solid #867600;

  @media (max-width: 1095px) {
    margin-left: 0px;
    margin-top: 2rem;
    width: 100%;
  }
`;

export const TitleContainer = styled.div``;

export const Title = styled.h1``;

export const Line = styled.div`
  background-color: black;
  width: 50%;
  height: 5px;
  border-radius: 10px;
  margin-top: 5px;
`;

export const TitleDescription = styled.div``;

export const UserDetail = styled.div`
  margin-top: 1rem;
`;

export const UserSpan = styled.span`
  font-weight: 600;
  display: flex;
  padding-left: 7px;
  font-size: 1rem;
`;

export const DescriptionContainer = styled.div`
  margin-top: 2rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 15px 0;

  @media (max-width: 1095px) {
    width: 100%;
  }
`;

export const P = styled.p`
  font-size: 1rem;
`;

export const AddComment = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  background-color: #acacac4f;
  outline: none;
  color: #fff;
  font-size: 0.9rem;
  font-size: 1rem;

  &:focus {
    background-color: #cacaca70;
  }
`;

export const ButtonComment = styled.button`
  width: 51%;
  padding: 5px 0;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  border: 2px solid #fde00a;

  &:hover {
    background-color: #fde00a;
    color: black;
    box-shadow: 3px 3px 10px 1px #fde00a54;
    transition: 0.3s ease-out;
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 1095px) {
    width: 31%;
  }

  @media (max-width: 795px) {
    width: 41%;
  }

  @media (max-width: 550px) {
    width: 61%;
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const Comment = styled.div`
  border-bottom: 1px solid yellow;
  margin-top: 1.5rem;
  padding: 15px 25px;
  border-radius: 6px;
  background-color: #ffffff0a;
  word-wrap: break-word;
  overflow-wrap: break-word;
  position: relative;
`;

export const UsernameP = styled.p`
  color: #fde00a;
`;

export const CommentP = styled.p`
  padding-left: 1rem;
  font-size: 0.9rem;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
`;

export const OptionsPost = styled.div`
  position: absolute;
  right: 15px;
  top: 10px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const OptionsPostBtn = styled.button`
  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  background-color: black;
  border-radius: 8px;
  width: 55%;
  padding: 5px 3px;
`;

export const Options = styled.div`
  color: yellow;

  button {
    width: 100%;
    font-family: "Poppins", sans-serif;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid yellow;
    color: yellow;
    border-radius: 6px;
  }

  button:hover {
    background-color: #fde00a;
    color: black;
    transition: 0.3s ease-in-out;
  }
`;
