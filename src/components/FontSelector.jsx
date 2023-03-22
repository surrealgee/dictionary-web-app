import styled from "styled-components";
import arrow from "../assets/images/icon-arrow-down.svg";

import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function FontSelector() {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <StyledFontSelector isDark={darkTheme}>
      <p>Sans Serif</p>
      <img src={arrow} alt="dropdown arrow" />
    </StyledFontSelector>
  );
}

const StyledFontSelector = styled.div`
  color: ${({ isDark }) => (isDark ? "#fff" : "#2d2d2d")};
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Inter";
  font-weight: 700;
  font-size: 0.875rem;
  margin-left: auto;
  border-right: 1px solid #e9e9e9;
  padding-right: 1em;

  img {
    color: #a445ed;
  }
`;

export default FontSelector;
