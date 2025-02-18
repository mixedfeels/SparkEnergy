import React, { useContext, useEffect, useState } from "react";
import Header from "../components/containers/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

import {
  Post,
  Title,
  H2,
  Description,
  TextDescription,
  Username,
  UserContainer,
  SpanLocal,
  CommentDiv,
  Reverse,
  LikeContainer,
  LikeButton,
} from "../styles/posts/SparkConnectStyle";

import {
  PageContainer,
  PostContainer,
  UserName,
  UsernameText,
  TextLocal,
  EditUserBtn,
  EditPasswordBtn,
  PostDiv,
} from "../styles/ProfileStyle";

import {
  MapPin,
  MessageCircle,
  ThumbsUp,
  CircleUserRound,
  Pen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Helpers/AuthContext";

function Profile() {
  const { id } = useParams();

  const { authState } = useContext(AuthContext);

  let navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://sparkenergy-api.onrender.com/user/basicinfo/${id}`)
      .then((response) => {
        setUserData(response.data);
      });

    axios
      .get(`https://sparkenergy-api.onrender.com/posts/byuserId/${id}`)
      .then((response) => {
        setListOfPosts(response.data);
      });
  }, []);

  return (
    <>
      <Header />
      <PageContainer>
        <UserName>
          <CircleUserRound size={100} color="#ffc400" strokeWidth={1.25} />
          <UsernameText>
            {userData.username}
            {authState.username === userData.username && (
              <EditUserBtn>
                <Pen size={30} />
              </EditUserBtn>
            )}
          </UsernameText>
          {authState.username === userData.username && (
            <EditPasswordBtn
              onClick={() => {
                navigate("/changePassword");
              }}
            >
              Mudar senha
            </EditPasswordBtn>
          )}

          <p>@{userData.username}</p>
          {userData.Address && (
            <TextLocal>
              <MapPin size={20} color="#fff" />
              {userData.Address.city}, {userData.Address.city} -{" "}
              {userData.Address.state}
            </TextLocal>
          )}
        </UserName>
        <PostContainer>
          <h2>{userData.username}'s Posts</h2>

          <PostDiv>
            <Reverse>
              {listOfPosts.map((value, index) => {
                return (
                  <Post key={index}>
                    <Title>
                      <H2
                        onClick={() => {
                          navigate(`/post/${value.id}`);
                        }}
                      >
                        {value.title}
                      </H2>
                    </Title>
                    <Description>
                      <TextDescription
                        onClick={() => {
                          navigate(`/post/${value.id}`);
                        }}
                      >
                        {value.description}
                      </TextDescription>
                    </Description>
                    <Username>
                      <UserContainer>
                        <p>
                          @{value.username}
                          <SpanLocal>
                            <MapPin size={20} color="#000000" />
                            {value.district}, {value.city} - {value.state}
                          </SpanLocal>
                        </p>
                      </UserContainer>

                      <CommentDiv>
                        <LikeContainer>
                          <label>{value.Likes.length}</label>
                          <LikeButton>
                            <span>
                              <ThumbsUp />
                            </span>
                          </LikeButton>
                        </LikeContainer>

                        <p>0</p>
                        <MessageCircle size={20} color="#000000" />
                      </CommentDiv>
                    </Username>
                  </Post>
                );
              })}
            </Reverse>
          </PostDiv>
        </PostContainer>
      </PageContainer>
    </>
  );
}

export default Profile;
