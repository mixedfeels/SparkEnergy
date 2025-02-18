import React from "react";
import NavBar from "../header-components/NavBar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: transparent;
`;

function Header() {
  return (
    <HeaderContainer>
      <NavBar />
    </HeaderContainer>
  );
}

export default Header;
