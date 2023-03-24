import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import styled from "styled-components";
import lookup from "../assets/images/icon-search.svg";

function SearchBar({ handleChange, handleSubmit, word, isEmpty }) {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div>
      <StyleSearchBar
        onSubmit={handleSubmit}
        isEmpty={isEmpty}
        isDark={darkTheme}
      >
        <input
          type="text"
          onChange={handleChange}
          value={word}
          placeholder="Search for any word"
        />
        <button type="submit">
          <img src={lookup} alt="glass magnifier icon" />
        </button>
      </StyleSearchBar>
      <ErrorMsg isEmpty={isEmpty}>Whoops, can't be empty…</ErrorMsg>
    </div>
  );
}

const StyleSearchBar = styled.form`
  background: ${({ isDark }) => (isDark ? "#1F1F1F" : "#f4f4f4")};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 1em 1.5em;
  margin-top: 1.5em;
  border: ${({ isEmpty, isDark }) =>
    isEmpty
      ? "1px solid #FF5252"
      : isDark
      ? "1px solid #1F1F1F"
      : "1px solid #f4f4f4"};

  input {
    width: 95%;
    background: none;
    border: none;
    font-family: "Inter";
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.9;
    color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#2d2d2d")};
  }

  input:focus,
  input:active {
    outline: none;
  }

  button {
    border: none;
    background: none;
  }
`;

const ErrorMsg = styled.p`
  visibility: ${({ isEmpty }) => (isEmpty ? "initial" : "hidden")};
  font-family: "Inter";
  font-size: 1rem;
  color: #ff5252;
  margin-top: 0.5em;
`;

export default SearchBar;
