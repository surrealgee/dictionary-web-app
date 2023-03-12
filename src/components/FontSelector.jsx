import { useState } from "react";
import styled from "styled-components";
import arrow from "../assets/images/icon-arrow-down.svg";

function FontSelector() {
  return (
    <StyledFontSelector>
      <p>Sans Serif</p>
      <img src={arrow} alt="dropdown arrow" />
    </StyledFontSelector>
  );
}

const StyledFontSelector = styled.div`
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Inter";
  font-weight: 700;
  font-size: 0.875rem;
  color: #2d2d2d;
  margin-left: auto;
  border-right: 1px solid #e9e9e9;
  padding-right: 1em;
`;

export default FontSelector;
