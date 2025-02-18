import Header from "../../components/containers/Header";
import Footer from "../../components/containers/Footer";
import {
  PageContainer,
  SparkConnectContainer,
  Post,
  Title,
  H2,
  Description,
  TextDescription,
  Username,
  UserContainer,
  SpanLocal,
  CommentDiv,
  H1,
  H2intro,
  Reverse,
  Button,
  LikeContainer,
  LikeButton,
  H2NoUser,
  H3,
  Page,
  ProfileLink,
} from "../../styles/posts/SparkConnectStyle";
import { MapPin, MessageCircle, ThumbsUp, User } from "lucide-react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../Helpers/AuthContext";

const StyledThumbsUp = styled(ThumbsUp)`
  fill: none;
  transition: color 0.3s ease, fill 0.3s ease;
  ${({ $isLiked }) =>
    $isLiked &&
    `
        fill: #000;
    `}
`;

function SparkConnect() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const { authState } = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    if (authState.status) {
      axios
        .get("https://sparkenergy-api.onrender.com/posts", {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          setListOfPosts(response.data.listOfPosts);
          setLikedPosts(
            response.data.likedPosts.map((like) => {
              return like.PostId;
            })
          );
        });
    }
  }, [authState.status]);

  const LikedPost = (postId) => {
    if (authState.status) {
      axios
        .post(
          "https://sparkenergy-api.onrender.com/likes",
          { PostId: postId },
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        )
        .then((response) => {
          setListOfPosts(
            listOfPosts.map((post) => {
              if (post.id === postId) {
                if (response.data.liked) {
                  // Adiciona o postId ao estado de likedPosts
                  setLikedPosts((prevLikedPosts) => [
                    ...prevLikedPosts,
                    postId,
                  ]);
                  return { ...post, Likes: [...post.Likes, 0] };
                } else {
                  // Remove o postId do estado de likedPosts
                  setLikedPosts((prevLikedPosts) =>
                    prevLikedPosts.filter((id) => id !== postId)
                  );
                  const likeArray = post.Likes;
                  likeArray.pop();
                  return { ...post, Likes: likeArray };
                }
              } else {
                return post;
              }
            })
          );
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Requisição cancelada", error.message);
          }

          console.error("Erro na requisição", error);
        });
    }
  };

  return (
    <PageContainer>
      <Header />
      <SparkConnectContainer>
        <H1>SparkConnect</H1>
        {!localStorage.getItem("accessToken") ? (
          <>
            <H2NoUser>
              Você Precisa estar Logado para utilizar desse serviço
            </H2NoUser>
            <H3>
              Faça seu login:
              <p>
                <Page to="/login">
                  <User />
                  Login
                </Page>
              </p>
            </H3>
          </>
        ) : (
          <>
            <H2intro>Envie sua contribuição:</H2intro>
            <Button to="/SparkPost">
              <span>SparkPost</span>
            </Button>
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
                          <ProfileLink to={`/profile/${value.UserId}`}>
                            @{value.username}
                          </ProfileLink>
                          <SpanLocal>
                            <MapPin size={20} color="#000000" />
                            {value.district}, {value.city} - {value.state}
                          </SpanLocal>
                        </p>
                      </UserContainer>

                      <CommentDiv>
                        <LikeContainer>
                          <label>{value.Likes.length}</label>
                          <LikeButton
                            onClick={() => {
                              LikedPost(value.id);
                            }}
                          >
                            <span>
                              <StyledThumbsUp
                                $isLiked={
                                  likedPosts.includes(value.id) ? true : false
                                }
                                size={20}
                                color="#000"
                              />
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
          </>
        )}
      </SparkConnectContainer>
      <Footer />
    </PageContainer>
  );
}

export default SparkConnect;
