import { useFormContext } from "react-hook-form";
// import FileInput from "./FileInput";
import {
  FormContainer,
  EntryArea,
  Input,
  DivLabel,
  EntryAreaTextArea,
  TextAreaInput,
  ErrorMessage,
  TitleContainer,
  Dados,
  PSaveData,
  PublishP,
  PublishTextArea,
  H2,
} from "../../styles/form/SparkPostFormStyle";
import { MessageSquareQuote, Share2, PartyPopper } from "lucide-react";

export function Post({ showErrors }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <H2>
        <MessageSquareQuote size={30} />
        <span>Faça seu SparkPost</span>
      </H2>
      <FormContainer>
        <EntryArea>
          <Input
            type="text"
            {...register("title", {
              required: "Titulo é obrigatório",
              pattern: {
                value: /^[A-Za-zÀ-ÿ,.\s]+$/,
                message: "Somente letras são permitidas",
              },
              // Remover espaços em branco no início e no final ao perder o foco
              onBlur: (e) => {
                e.target.value = e.target.value.trim();
              },
            })}
            $hasError={showErrors && errors?.title}
          />
          <DivLabel>Digite seu o titulo</DivLabel>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.title} />
      </FormContainer>
      <FormContainer>
        <EntryAreaTextArea>
          <TextAreaInput
            {...register("description", {
              required: "Descrição é obrigatório",
              pattern: {
                value: /^[A-Za-zÀ-ÿ,.\s]+$/,
                message: "Somente letras são permitidas",
              },
              onBlur: (e) => {
                e.target.value = e.target.value.trim();
              },
            })}
            $hasError={showErrors && errors?.description}
          />
          <DivLabel>Digite a descrição</DivLabel>
        </EntryAreaTextArea>
        <ErrorMessage error={showErrors && errors?.description} />
      </FormContainer>
    </div>
  );
}

export function Publish() {
  const { getValues } = useFormContext(); // Obtém o contexto do formulário

  const titulo = getValues("title");
  const descricao = getValues("description");

  return (
    <div>
      <h2>
        <Share2 />
        <PSaveData style={{ marginLeft: "3px" }}>Publicação</PSaveData>
      </h2>
      <h3>Confira seu post:</h3>
      <Dados style={{ marginBottom: "2rem" }}>
        <PublishP>
          Titulo: <PSaveData>{titulo}</PSaveData>
        </PublishP>
        <PublishP>
          Descrição:{" "}
          <PublishTextArea value={descricao} disabled></PublishTextArea>
        </PublishP>
      </Dados>
    </div>
  );
}

export function Congratulations() {
  return (
    <div>
      <TitleContainer>
        <h2 style={{ paddingBottom: "0px", color: "#005700" }}>
          <PartyPopper size={32} color="#005700" strokeWidth={1.75} />
          Obrigado por sua Contribuição!
        </h2>
        <p style={{ fontSize: "1rem" }}>
          Você preencheu todos os campos corretamente
        </p>
      </TitleContainer>
    </div>
  );
}
