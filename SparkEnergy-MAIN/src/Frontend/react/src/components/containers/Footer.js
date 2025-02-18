import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Github, Twitter, Facebook, Instagram } from "lucide-react";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #010201;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  position: relative;
  bottom: 0;
`;

//============================== Links ==============================//

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const IconLink = styled.a`
  color: #fff;
  margin: 0 1rem;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffe100;
    transform: scale(1.1);
  }
`;

const UlFooter = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const FooterLink = styled(Link)`
  font-size: 1rem;
  margin: 0 1.5rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffe100;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const scrollToSection = (event, id) => {
  event.preventDefault();
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

//============================== Newsletter ==============================//

const NewsletterContainer = styled.div`
  margin: 2rem 0;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 2rem;

  @media (max-width: 950px) {
    gap: 0;
    flex-direction: column; /* Oculta em telas pequenas */
  }
`;

const NewsletterInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  margin-right: 1rem;
  width: 250px;
`;

const NewsletterButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  font-weight: bold;
  background-color: #ffe100;
  color: #000;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

//============================== Texto Footer ==============================//

const ListTextFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  text-align: center;
`;

const TextFooter = styled.p`
  margin-top: 2rem;
  font-size: 0.875rem;
  color: #ccc;
  text-align: center;
`;

//============================== Exportar ==============================//

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Obrigado por se inscrever na nossa newsletter!");
      setEmail(""); // Limpa o campo de email
    } else {
      setMessage("Por favor, insira um e-mail válido.");
    }
  };

  return (
    <FooterContainer>
      <NewsletterContainer>
        <h3>Assine nossa Newsletter</h3>
        <form onSubmit={handleSubscribe}>
          <NewsletterInput
            type="email"
            placeholder="Digite o seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <NewsletterButton type="submit">Inscrever-se</NewsletterButton>
        </form>
        {message && <p>{message}</p>}
      </NewsletterContainer>

      <SocialIcons>
        <IconLink
          href="https://github.com/2024-2-MCC2/Projeto10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </IconLink>
        <IconLink>
          <Twitter />
        </IconLink>
        <IconLink>
          <Facebook />
        </IconLink>
        <IconLink>
          <Instagram />
        </IconLink>
      </SocialIcons>

      <UlFooter>
        <FooterLink to="/">Início</FooterLink>
        <FooterLink to="#about" onClick={(e) => scrollToSection(e, "about")}>
          Sobre
        </FooterLink>
        <FooterLink
          to="#services"
          onClick={(e) => scrollToSection(e, "services")}
        >
          Serviços
        </FooterLink>
        <FooterLink to="/SparkConnect">SparkConnect</FooterLink>
        <FooterLink to="/calculo">Calculadora</FooterLink>
      </UlFooter>
      <ListTextFooter>
        <TextFooter to="/">Termos de Uso</TextFooter>
        <TextFooter to="/">Política de Privacidade</TextFooter>
      </ListTextFooter>
      <TextFooter>
        Favicon:{" "}
        <a
          href="https://www.flaticon.com/free-icons/clean-energy"
          title="clean energy icons"
        >
          Clean energy icons created by Flat Icons - Flaticon
        </a>
      </TextFooter>
      <TextFooter>© 2024 SparkEnergy</TextFooter>
    </FooterContainer>
  );
}

export default Footer;
