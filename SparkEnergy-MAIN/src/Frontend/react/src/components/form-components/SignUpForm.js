import { useFormContext } from "react-hook-form";
// import FileInput from "./FileInput";
import {
  FormContainer,
  EntryArea,
  Input,
  DivLabel,
  ErrorMessage,
  Dados,
  H4,
  PSaveData,
  PublishP,
  ButtonShowPassword,
  PLogin,
  LinkPage,
  Select,
} from "../../styles/form/SignUpFormStyle";
import { User, House, ClipboardList, ClipboardCheck } from "lucide-react";
import validator from "validator";
import { useState } from "react";

export function DadoPessoal({ showErrors }) {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const formatName = (event) => {
    // Captura o valor atual do campo de entrada
    const inputValue = event.target.value;
    // Formata o nome: primeira letra maiúscula e o restante em minúsculas
    const formattedName =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    // Atualiza o valor do campo no react-hook-form com o nome formatado
    setValue("name", formattedName);
  };

  return (
    <div>
      <h2>
        <User />
        Dados Pessoais
      </h2>
      <FormContainer>
        <EntryArea>
          <Input
            type="text"
            {...register("name", {
              required: "Nome é obrigatório",
              pattern: {
                value: /^[A-Za-zÀ-ÿ\s]+$/,
                message: "Somente letras são permitidas",
              },
              onBlur: (e) => {
                e.target.value = e.target.value.trim();
              },
            })}
            onBlur={formatName} // Chama a função de formatação ao sair do campo
            $hasError={showErrors && errors?.name}
          />
          <DivLabel>Digite seu primeiro nome</DivLabel>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.name} />
      </FormContainer>
      <FormContainer>
        <EntryArea>
          <Input
            type="text"
            {...register("lastname", {
              pattern: {
                value: /^[A-Za-z.À-ÿ\s]+$/,
                message: "Somente letras são permitidas",
              },
              onBlur: (e) => {
                e.target.value = e.target.value.trim();
              },
            })}
            $hasError={showErrors && errors?.lastname}
          />
          <DivLabel>Digite seu sobrenome (Opcional)</DivLabel>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.lastname} />
      </FormContainer>
      <FormContainer style={{ marginBottom: "3rem" }}>
        <EntryArea>
          <Input
            type="text"
            {...register("username", {
              required: "Nome de usuário é obrigatório",
              pattern: {
                value: /^[a-z0-9_-À-ÿ]+$/,
                message:
                  "Apenas letras minúsculas, sublinhado(_), travessão(-) são permitidos ",
              },
            })}
            $hasError={showErrors && errors?.username}
          />
          <DivLabel>Digite seu nome de usuário</DivLabel>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.username} />
      </FormContainer>
    </div>
  );
}

export function Endereco({ showErrors }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <h2>
        <House />
        Endereço
      </h2>
      <FormContainer>
        <EntryArea>
          <Select
            {...register("state", {
              required: "Estado é obrigatório",
            })}
            $hasError={showErrors && errors?.state}
          >
            <option value="">Selecione seu Estado</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </Select>
          <DivLabel>Selecione seu Estado</DivLabel>
        </EntryArea>
        {showErrors && errors?.state && (
          <ErrorMessage error={errors.state.message} />
        )}
      </FormContainer>
      <FormContainer>
        <EntryArea>
          <Input
            type="text"
            {...register("city", {
              required: "Cidade é obrigatório",
              pattern: {
                value: /^[A-Za-zÀ-ÿ\s]+$/,
                message: "Somente letras são permitidas",
              },
              onBlur: (e) => {
                e.target.value = e.target.value.trim();
              },
            })}
            $hasError={showErrors && errors?.city}
          />
          <DivLabel>Digite sua cidade</DivLabel>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.city} />
      </FormContainer>
      <FormContainer>
        <EntryArea>
          <Input
            type="text"
            {...register("district", {
              required: "Bairro é obrigatório",
              pattern: {
                value: /^[A-Za-zÀ-ÿ\s]+$/,
                message: "Somente letras são permitidas",
              },
              onBlur: (e) => {
                e.target.value = e.target.value.trim();
              },
            })}
            $hasError={showErrors && errors?.district}
          />
          <DivLabel>Digite seu bairro</DivLabel>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.district} />
      </FormContainer>
    </div>
  );
}

export function DadosCadastrais({ showErrors }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const watchPassword = watch("password");

  return (
    <div>
      <h2>
        <ClipboardList />
        DadosCadastrais
      </h2>
      <FormContainer>
        <EntryArea>
          <Input
            type="text"
            {...register("email", {
              required: "Email é obrigatório",
              validate: (value) => {
                // Validação do e-mail
                if (!validator.isEmail(value)) {
                  return "Por favor, insira um e-mail válido"; // Mensagem personalizada de erro
                }
                return true; // Retorna true se a validação for bem-sucedida
              },
            })}
            $hasError={showErrors && errors?.email}
          />
          <DivLabel>Digite seu email</DivLabel>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.email} />
      </FormContainer>
      <FormContainer>
        <EntryArea>
          <Input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Senha é obrigatório",
            })}
            $hasError={showErrors && errors?.password}
          />
          <DivLabel>Digite seu senha</DivLabel>
          <ButtonShowPassword
            onClick={togglePasswordVisibility}
            $hasError={errors?.password}
            type="button"
          >
            {showPassword ? "Esconder" : "Mostrar"}
          </ButtonShowPassword>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.password} />
      </FormContainer>
      <FormContainer>
        <EntryArea>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmaSenha", {
              required: "Por favor, confirme sua senha",
              minLength: 7,
              validate: (value) => {
                if (value === watchPassword) {
                  return true;
                } else {
                  return "As senhas não conferem";
                }
              },
            })}
            $hasError={showErrors && errors?.confirmaSenha}
          />
          <DivLabel>Confirme sua senha</DivLabel>
          <ButtonShowPassword
            onClick={toggleConfirmPasswordVisibility}
            $hasError={errors?.confirmaSenha}
            type="button"
          >
            {showConfirmPassword ? "Esconder" : "Mostrar"}
          </ButtonShowPassword>
        </EntryArea>
        <ErrorMessage error={showErrors && errors?.confirmaSenha} />
      </FormContainer>
      <PLogin>
        Já tem uma conta? <LinkPage to="/login">Fazer Login</LinkPage>
      </PLogin>
    </div>
  );
}

export function Cadastrar() {
  const { getValues } = useFormContext(); // Obtém o contexto do formulário

  // Acessa os valores dos inputs
  const name = getValues("name");
  const lastname = getValues("lastname");
  const email = getValues("email");
  const username = getValues("username");
  const estado = getValues("state");
  const cidade = getValues("city");
  const bairro = getValues("district");

  return (
    <div>
      <h2>
        <ClipboardCheck size={30} />
        <PSaveData style={{ marginLeft: "3px" }}>Confirmação</PSaveData>
      </h2>
      <h3>Confira seus dados:</h3>
      <Dados style={{ marginTop: "1rem" }}>
        <H4>Dados Pessoais</H4>
        <PublishP>
          Nome completo: <PSaveData>{name}</PSaveData>
        </PublishP>
        <PublishP>
          Sobrenome: <PSaveData>{lastname}</PSaveData>
        </PublishP>

        <hr />
      </Dados>
      <Dados>
        <H4>Endereço</H4>
        <PublishP>
          Estado: <PSaveData>{estado}</PSaveData>
        </PublishP>
        <PublishP>
          Cidade: <PSaveData>{cidade}</PSaveData>
        </PublishP>
        <PublishP>
          Bairro: <PSaveData>{bairro}</PSaveData>
        </PublishP>
        <hr />
      </Dados>
      <Dados style={{ marginBottom: "2rem" }}>
        <H4>Dados Cadastrais</H4>
        <PublishP>
          Nome de usuário: <PSaveData>{username}</PSaveData>
        </PublishP>
        <PublishP>
          Email: <PSaveData>{email}</PSaveData>
        </PublishP>
        <hr />
      </Dados>
    </div>
  );
}
