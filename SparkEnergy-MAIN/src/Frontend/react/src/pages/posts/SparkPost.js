import React, { useEffect, useState } from "react";
import Header from "../../components/containers/Header";
import {
  Post,
  Publish,
  Congratulations,
} from "../../components/form-components/SparkPostForm";
import { useForm, FormProvider } from "react-hook-form";
import {
  PageContainer,
  OverlayContainer,
  Container,
  Content,
  Btns,
  ButtonNext,
  ButtonPublish,
  ButtonBlog,
  ButtonPrev,
} from "../../styles/posts/SparkPostStyle";
import { Send, PenLine, MailCheck } from "lucide-react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SparkPostLink = styled(Link)`
  color: #ffd700;
  text-decoration: none;
`;

function SparkPost() {
  const methods = useForm();
  const [step, setSteps] = useState(1);
  const totalSteps = 3;

  const [showErrors, setShowErrors] = useState(false);
  // Vai ser mudado apenas quando o botão 'Next' for clicado, para o valor só ser mostrado quando o botão for clicado

  let navigate = useNavigate();

  function HandlePrev() {
    if (step > 1) setSteps((step) => step - 1);
  }

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  });

  const HandleNext = async () => {
    const isStepValid = await methods.trigger(); // Valida os campos
    if (isStepValid) {
      setShowErrors(false); // Resetar erro ao passar para o próximo passo
      setSteps((step) => step + 1); // Avança se válido
    } else {
      setShowErrors(true); // Exibe erros após tentativa de avançar
    }
  };

  const HandlePublish = () => {
    setSteps((step) => step + 1);
  };

  const onSubmit = (data) => {
    axios.post("https://sparkenergy-api.onrender.com/posts", data, {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    });
  };

  const onError = (errors) => {
    if (showErrors) {
      console.log("Erros de validação:", errors);
    }
    // Aqui você pode lidar com os erros, mas não deve enviar nada ao servidor
  };

  const renderSteps = () => {
    switch (step) {
      case 1:
        return <Post showErrors={showErrors} />;
      case 2:
        return <Publish />;
      case 3:
        return <Congratulations />;
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <Header />
      <OverlayContainer>
        <Container>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
              <Content>{renderSteps()}</Content>
              <Btns>
                <ButtonPrev
                  style={{ display: step === 2 ? "flex" : "none" }}
                  onClick={HandlePrev}
                  type="button"
                >
                  <PenLine />
                  <span>Editar</span>
                </ButtonPrev>
                <ButtonNext
                  style={{ display: step >= 2 ? "none" : "flex" }}
                  onClick={HandleNext}
                  type="button"
                >
                  <span>Finalizar</span>
                  <MailCheck />
                </ButtonNext>
                <ButtonPublish
                  style={{ display: step === 2 ? "flex" : "none" }}
                  onClick={HandlePublish}
                  type="submit"
                >
                  <span>Publicar</span> <Send />
                </ButtonPublish>
                <ButtonBlog
                  style={{ display: step === totalSteps ? "flex" : "none" }}
                  type="button"
                >
                  <SparkPostLink to="/SparkConnect">SparkConnect</SparkPostLink>
                </ButtonBlog>
              </Btns>
            </form>
          </FormProvider>
        </Container>
      </OverlayContainer>
    </PageContainer>
  );
}

export default SparkPost;
