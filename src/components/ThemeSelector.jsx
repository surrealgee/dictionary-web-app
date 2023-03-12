import { useState } from "react";
import styled from "styled-components";
import moon from "../assets/images/icon-moon.svg";
import SwitchButton from "./SwitchButton";

function ThemeSelector() {
  return (
    <StyledThemeSelector>
      <SwitchButton />
      <img src={moon} alt="moon icon" />
    </StyledThemeSelector>
  );
}

const StyledThemeSelector = styled.div`
  min-width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 0.875rem;
  color: #2d2d2d;
  font-family: "Inter";
`;

export default ThemeSelector;
