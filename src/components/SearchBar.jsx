import { useState } from "react";
import styled from "styled-components";
import lookup from "../assets/images/icon-search.svg";

function SearchBar({ handleChange, handleSubmit, word }) {
  console.log(word);
  return (
    <StyleSearchBar onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={word}
        placeholder="Search for a word"
      />
      <button type="submit">
        <img src={lookup} alt="glass magnifier icon" />
      </button>
    </StyleSearchBar>
  );
}

const StyleSearchBar = styled.form`
  background: #f4f4f4;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 1em 1.5em;
  margin-top: 1.5em;

  input {
    width: 95%;
    background: none;
    border: none;
    font-family: "Inter";
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.9;
    color: #2d2d2d;
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

export default SearchBar;
