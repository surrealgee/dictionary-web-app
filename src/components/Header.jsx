import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import FontSelector from "./FontSelector";
import ThemeSelector from "./ThemeSelector";

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="Dictionary logo" />
      <FontSelector />
      <ThemeSelector />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1em;
  margin-top: 1.5em;
`;

export default Header;
