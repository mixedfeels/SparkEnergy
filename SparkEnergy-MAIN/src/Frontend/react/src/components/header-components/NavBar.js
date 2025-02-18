import { useState, useContext } from "react";
import { AlignJustify, X, CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/images/header_imgs/logo.png";
import { AuthContext } from "../../Helpers/AuthContext";
import {
  NavbarContainer,
  Logo,
  Ul,
  ActionButton,
  BtnsConnect,
  ToggleButton,
  DropdownMenu,
  LiDropdown,
  UlDropdown,
  ButtonDrop,
  Nav,
  UserContainer,
  UserLink,
  UserLinkDrop,
} from "../../styles/NavBarStyle";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { authState, setAuthState } = useContext(AuthContext);
  let navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const Logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };

  return (
    <NavbarContainer>
      <Logo to="/">
        <img src={LogoImg} alt="Logo da Empresa" />
      </Logo>
      <nav>
        <Ul>
          <Nav to="/">Início</Nav>
          <Nav to="/" onClick={(e) => scrollToSection(e, "about")}>
            Sobre
          </Nav>
          <Nav to="#services" onClick={(e) => scrollToSection(e, "services")}>
            Serviços
          </Nav>
          <Nav to="/SparkConnect">SparkConnect</Nav>
          <Nav to="/calculo">Calculadora</Nav>
        </Ul>
      </nav>
      {!localStorage.getItem("accessToken") ? (
        <BtnsConnect>
          <ActionButton style={{ marginRight: "4px" }} to="/Login">
            Login
          </ActionButton>
          <ActionButton to="/signUp">Cadastro</ActionButton>
        </BtnsConnect>
      ) : (
        <UserContainer>
          <UserLink to={`/profile/${authState.id}`}>
            <CircleUserRound />
            <span>{authState.username}</span>
          </UserLink>
          <ActionButton onClick={Logout} to="/">
            Logout
          </ActionButton>
        </UserContainer>
      )}

      <ToggleButton onClick={toggleMenu}>
        {isOpen ? <X /> : <AlignJustify />}
      </ToggleButton>

      <DropdownMenu $isOpen={isOpen}>
        <UlDropdown>
          <LiDropdown to="/">Home</LiDropdown>
          <LiDropdown to="/" onClick={(e) => scrollToSection(e, "about")}>
            About
          </LiDropdown>
          <LiDropdown
            to="#services"
            onClick={(e) => scrollToSection(e, "services")}
          >
            Services
          </LiDropdown>
          <LiDropdown to="/SparkConnect">SparkConnect</LiDropdown>
          <LiDropdown to="/calculo">Cálculo</LiDropdown>
          {!localStorage.getItem("accessToken") ? (
            <>
              <ButtonDrop to="/SignUp">Cadastro</ButtonDrop>
              <ButtonDrop to="/Login">Login</ButtonDrop>
            </>
          ) : (
            <>
              <ButtonDrop
                onClick={() => {
                  navigate(`/profile/${authState.id}`);
                }}
              >
                <UserLinkDrop>
                  <CircleUserRound />
                  {authState.username}
                </UserLinkDrop>
              </ButtonDrop>

              <ButtonDrop onClick={Logout} to="/">
                Logout
              </ButtonDrop>
            </>
          )}
        </UlDropdown>
      </DropdownMenu>
    </NavbarContainer>
  );
}

export default NavBar;
