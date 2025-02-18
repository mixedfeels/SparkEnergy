import React, { useState } from "react";
import Progress from "../components/form-components/Progress";
import Header from "../components/containers/Header";
import {
  DadoPessoal,
  Endereco,
  DadosCadastrais,
  Cadastrar,
} from "../components/form-components/SignUpForm";
import {
  PageContainer,
  OverlayContainer,
  Container,
  ProgressContainer,
  H1,
  Circle,
  Content,
  Btns,
  ButtonPrev,
  ButtonNext,
  ButtonPublish,
} from "../styles/SingUpStyle";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";

function SignUp() {
  const methods = useForm();
  const [step, setSteps] = useState(1);
  const totalSteps = 4;

  let navigate = useNavigate();

  const [showErrors, setShowErrors] = useState(false);
  // Vai ser mudado apenas quando o botão 'Next' for clicado, para o valor só ser mostrado quando o botão for clicado

  function HandlePrev() {
    if (step > 1) setSteps((step) => step - 1);
  }

  const HandleNext = async () => {
    const isStepValid = await methods.trigger(); // Valida os campos
    if (isStepValid) {
      setShowErrors(false); // Resetar erro ao passar para o próximo passo
      setSteps((step) => step + 1); // Avança se válido
    } else {
      setShowErrors(true); // Exibe erros após tentativa de avançar
    }
  };

  const onSubmit = async (data) => {
    const { confirmaSenha, ...rest } = data;
    try {
      axios.post("https://sparkenergy-api.onrender.com/user", rest);
      // Navegar para a página de sucesso após o cadastro
      navigate("/validSignUp");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      // Aqui você pode exibir uma mensagem de erro para o usuário, se desejar
    }
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
        return <DadoPessoal showErrors={showErrors} />;
      case 2:
        return <Endereco showErrors={showErrors} />;
      case 3:
        return <DadosCadastrais showErrors={showErrors} />;
      case 4:
        return <Cadastrar />;
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <Header />
      <OverlayContainer>
        <Container>
          <ProgressContainer
            style={{ display: step === totalSteps ? "none" : "flex" }}
          >
            <Progress totalSteps={totalSteps} step={step} />
            <Circle $active={step >= 1}>1</Circle>
            <Circle $active={step >= 2}>2</Circle>
            <Circle $active={step >= 3}>3</Circle>
            <Circle $active={step >= 4}>4</Circle>
          </ProgressContainer>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
              <H1>Cadastro</H1>
              <Content>{renderSteps()}</Content>
              <Btns>
                <ButtonPrev
                  disabled={step <= 1}
                  style={{ display: step === 5 ? "none" : "flex" }}
                  onClick={HandlePrev}
                  type="button"
                >
                  <ChevronLeft />
                  Prev
                </ButtonPrev>
                <ButtonNext
                  style={{ display: step >= 4 ? "none" : "flex" }}
                  onClick={HandleNext}
                  type="button"
                >
                  Next
                  <ChevronRight />
                </ButtonNext>
                <ButtonPublish
                  style={{ display: step === 4 ? "flex" : "none" }}
                  type="submit"
                >
                  Cadastrar
                </ButtonPublish>
              </Btns>
            </form>
          </FormProvider>
        </Container>
      </OverlayContainer>
    </PageContainer>
  );
}

export default SignUp;
