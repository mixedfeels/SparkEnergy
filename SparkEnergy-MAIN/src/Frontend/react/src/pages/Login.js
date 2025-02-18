import HeaderConnect from "../components/containers/Header";
import {
  PageContainer,
  OverlayContainer,
  Container,
  Content,
  FormContainer,
  EntryArea,
  H2,
  Input,
  Label,
  ErrorMessage,
  ButtonShowPassword,
  ButtonLogin,
  LinkPage,
  PLogin,
} from "../styles/form/LoginFormStyle";
import { UserRoundPlus } from "lucide-react";
import validator from "validator";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Helpers/AuthContext";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { setAuthState } = useContext(AuthContext);

  let navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://sparkenergy-api.onrender.com/user/login",
        data
      );

      localStorage.setItem("accessToken", response.data.token);
      setAuthState({
        username: response.data.username,
        id: response.data.id,
        status: true,
      });

      // Navegar apenas se o login for bem-sucedido
      navigate("/validlogin");
    } catch (error) {
      // Aqui você pode lidar com os erros
      if (error.response) {
        // O servidor respondeu com um código de status fora do intervalo 2xx
        console.error("Erro do servidor:", error.response.data);
        alert(error.response.data.message);
      } else if (error.request) {
        // A requisição foi feita mas não houve resposta
        console.error("Erro na requisição:", error.request);
        alert("Erro na requisição. Tente novamente.");
      } else {
        // Algo aconteceu ao configurar a requisição
        console.error("Erro:", error.message);
        alert("Erro inesperado. Tente novamente.");
      }
    }
  };

  return (
    <PageContainer>
      <HeaderConnect />
      <OverlayContainer>
        <Container>
          <Content>
            <div>
              <H2>
                <UserRoundPlus size={32} />
                Login
              </H2>
              <FormContainer>
                <EntryArea>
                  <Input
                    type="text"
                    {...register("username", {
                      required: "Nome de usuário é obrigatório",
                      pattern: {
                        value: /^[a-z0-9_-]+$/,
                        message:
                          "Apenas letras minúsculas, sublinhado(_), travessão(-) são permitidos ",
                      },
                    })}
                    $hasError={errors?.username}
                  />
                  <Label>Digite seu nome de usuário</Label>
                </EntryArea>
                <ErrorMessage error={errors?.username} />
              </FormContainer>
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
                    $hasError={errors?.email}
                  />
                  <Label>Digite seu email</Label>
                </EntryArea>
                <ErrorMessage error={errors?.email} />
              </FormContainer>
              <FormContainer>
                <EntryArea>
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Senha é obrigatória",
                      minLength: {
                        value: 8,
                        message: "A senha deve ter pelo menos 8 caracteres",
                      },
                    })}
                    $hasError={errors?.password}
                  />
                  <Label>Digite sua senha</Label>
                  <ButtonShowPassword
                    onClick={togglePasswordVisibility}
                    $hasError={errors?.password}
                  >
                    {showPassword ? "Esconder" : "Mostrar"}
                  </ButtonShowPassword>
                </EntryArea>
                <ErrorMessage error={errors?.password} />
              </FormContainer>
            </div>
            <ButtonLogin onClick={() => handleSubmit(onSubmit)()}>
              Login
            </ButtonLogin>
            <PLogin>
              <div>
                Não tem uma conta?{" "}
                <LinkPage to="/signup">Fazer Cadastro</LinkPage>
              </div>
            </PLogin>
          </Content>
        </Container>
      </OverlayContainer>
    </PageContainer>
  );
}

export default Login;
