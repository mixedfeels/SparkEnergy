import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  PostPage,
  //   PostData,
  Title,
  PostUser,
  PostComment,
  Line,
  UserDetail,
  DescriptionContainer,
  UserSpan,
  TitleContainer,
  TitleDescription,
  P,
  CommentList,
  AddComment,
  Input,
  ButtonComment,
  Comment,
  UsernameP,
  CommentP,
  DeleteButton,
  OptionsPostBtn,
  OptionsPost,
  OptionsContainer,
  Options,
} from "../../styles/posts/PostStyle";
import { MapPin, X, Ellipsis } from "lucide-react";
import { useForm } from "react-hook-form";
import Header from "../../components/containers/Header";
import { AuthContext } from "../../Helpers/AuthContext";

function Post() {
  let { id } = useParams();

  const [postObejct, setPostObject] = useState();
  const [comments, setComments] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [countComment, setCountComment] = useState(0);
  const [openedOptions, setOpenedOptions] = useState(false);
  const { authState } = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://sparkenergy-api.onrender.com/posts/byId/${id}`)
      .then((response) => {
        setPostObject(response.data);
      });

    axios
      .get(`https://sparkenergy-api.onrender.com/comments/${id}`)
      .then((response) => {
        setComments(response.data);
      });
  }, [id]);

  const onSubmit = (data) => {
    const commentBody = data.comment;
    axios
      .post(
        "https://sparkenergy-api.onrender.com/comments",
        { commentBody, PostId: id },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          const commentToAdd = {
            commentBody: commentBody,
            username: response.data.username,
          };
          setComments([...comments, commentToAdd]);
          setCountComment(countComment + 1);
          reset();
        }
      });
  };

  const deleteComment = (id) => {
    if (!id) {
      console.alert("Invalid comment ID");
      return;
    }

    console.log("Attempting to delete comment with ID:", id); // Log the ID

    axios
      .delete(`https://sparkenergy-api.onrender.com/comments/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {
        setComments((comments) =>
          comments.filter((comment) => comment.id !== id)
        );
        console.log("Comment deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  };

  const deletePost = (id) => {
    axios
      .delete(`https://sparkenergy-api.onrender.com/posts/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {
        navigate("/sparkconnect");
      });
  };

  const editPost = (option) => {
    if (option === "title") {
      let newTitle = prompt("Digite o novo titulo:");
      if (newTitle !== null) {
        axios.put(
          "https://sparkenergy-api.onrender.com/posts/title",
          { newTitle: newTitle, id: id },
          {
            headers: { accessToken: localStorage.getItem("accessToken") },
          }
        );

        setPostObject({ ...postObejct, title: newTitle });
      }
    } else {
      let newDescription = prompt("Digite a nova descrição:");
      if (newDescription !== null) {
        axios.put(
          "https://sparkenergy-api.onrender.com/posts/description",
          { newDescription: newDescription, id: id },
          {
            headers: { accessToken: localStorage.getItem("accessToken") },
          }
        );
        setPostObject({ ...postObejct, description: newDescription });
      }
    }
  };

  const OpenOptions = () => {
    if (openedOptions) {
      setOpenedOptions(false);
    } else {
      setOpenedOptions(true);
    }
  };

  return (
    <>
      <Header />
      <div>
        {postObejct != null && (
          <PostPage>
            <PostUser>
              {authState.username === postObejct.username && (
                <OptionsPost>
                  <OptionsPostBtn
                    onClick={() => {
                      OpenOptions();
                    }}
                  >
                    <Ellipsis />
                  </OptionsPostBtn>
                  {!openedOptions ? null : (
                    <OptionsContainer>
                      <Options>
                        <button
                          onClick={() => {
                            deletePost(postObejct.id);
                          }}
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => {
                            editPost("title");
                          }}
                        >
                          Mudar titulo
                        </button>
                        <button
                          onClick={() => {
                            editPost("description");
                          }}
                        >
                          Mudar descrição
                        </button>
                      </Options>
                    </OptionsContainer>
                  )}
                </OptionsPost>
              )}

              <TitleDescription>
                <TitleContainer>
                  <Title>{postObejct.title}</Title>
                  <Line />
                </TitleContainer>
                <DescriptionContainer>
                  <P>{postObejct.description}</P>
                </DescriptionContainer>
              </TitleDescription>
              <UserDetail>
                <p>
                  @{postObejct.username}
                  <UserSpan>
                    <MapPin size={20} color="#000000" />
                    {postObejct.district}, {postObejct.city} -{" "}
                    {postObejct.state}
                  </UserSpan>
                </p>
                <p>comments: {countComment}</p>
              </UserDetail>
            </PostUser>
            <PostComment>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <AddComment>
                    <Input
                      type="text"
                      placeholder="Deixe seu Comentário"
                      {...register("comment")}
                    />
                    <ButtonComment type="submit">Comentar</ButtonComment>
                  </AddComment>
                </form>
              </div>

              <CommentList>
                {comments.map((comment, index) => {
                  return (
                    <Comment key={index}>
                      <UsernameP>@{comment.username}</UsernameP>

                      <CommentP>{comment.commentBody}</CommentP>
                      {authState.username === comment.username && (
                        <DeleteButton onClick={() => deleteComment(comment.id)}>
                          <X size={14} color="#ffff80" />
                        </DeleteButton>
                      )}
                    </Comment>
                  );
                })}
              </CommentList>
            </PostComment>
          </PostPage>
        )}
      </div>
    </>
  );
}

export default Post;
