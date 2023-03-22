import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function SwitchButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <SwitchWrapper>
      <CheckBox id="checkbox" type="checkbox" onChange={toggleTheme} />
      <CheckBoxLabel htmlFor="checkbox" />
    </SwitchWrapper>
  );
}

const SwitchWrapper = styled.div`
  position: relative;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: #757575;
  cursor: pointer;
  padding: 3px;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    background: #fff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
opacity: 0;
z-index: 1;
border-radius: 15px;
width: 42px
height: 26px;
&:checked + ${CheckBoxLabel} {
    background: #A445ED;
    &::after { 
        content: "";
        display: block;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        margin-left: 20px;
        transition: 0.2s;
    }
}    
`;

export default SwitchButton;
