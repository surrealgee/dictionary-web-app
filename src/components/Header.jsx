import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import FontSelector from "./FontSelector";
import ThemeSelector from "./ThemeSelector";

function Header() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <StyledHeader isDark={darkTheme}>
      <img src={logo} alt="Dictionary logo" />
      <FontSelector />
      <ThemeSelector toggleTheme={toggleTheme} />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${({ isDark }) => (isDark ? "#050505" : "#fff")};
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1em;
  padding-top: 1.5em;
`;

export default Header;
