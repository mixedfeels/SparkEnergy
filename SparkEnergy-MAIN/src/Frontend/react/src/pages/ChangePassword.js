import React, { useState } from "react";
import Header from "../components/containers/Header";
import PageNotFound from "./PageNotFound";
import axios from "axios";

import {
  Container,
  InputContainer,
  Input,
  Btn,
  BtnContainer,
} from "../styles/ChangePasswordStyle";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const ChangePassword = () => {
    axios
      .put(
        "https://sparkenergy-api.onrender.com/user/changepassword",
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        }
      });
  };

  return (
    <div>
      {!localStorage.getItem("accessToken") ? (
        <>
          <PageNotFound />
        </>
      ) : (
        <>
          <Header />
          <div>
            <Container>
              <h1>Change Password</h1>
              <InputContainer>
                <Input
                  type="text"
                  placeholder="Old Password"
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  placeholder="New Password"
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
                <BtnContainer>
                  <Btn
                    onClick={() => {
                      ChangePassword();
                    }}
                  >
                    Salvar mudança
                  </Btn>
                </BtnContainer>
              </InputContainer>
            </Container>
          </div>
        </>
      )}
    </div>
  );
}

export default ChangePassword;
