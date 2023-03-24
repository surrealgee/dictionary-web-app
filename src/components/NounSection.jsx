import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function NounSection({ wordData }) {
  const { darkTheme } = useContext(ThemeContext);
  const { meanings } = wordData;

  const definitionsList = meanings[0].definitions
    .slice(0, 3)
    .map((element, index) => {
      return <li key={index}>{element.definition}</li>;
    });

  const synonymsList = meanings[0].synonyms
    .slice(0, 1)
    .map((element, index) => {
      return element;
    });

  return (
    <StyledSection isDark={darkTheme}>
      <SectionTitle>noun</SectionTitle>
      <h3>Meaning</h3>
      <ul>{definitionsList}</ul>
      <div>
        {synonymsList.length > 0 && <h3>Synonyms</h3>}
        <p>{synonymsList}</p>
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  background-color: ${({ isDark }) => (isDark ? "#050505" : "#fff")};
  color: ${({ isDark }) => (isDark ? "#fff" : "2d2d2d")};

  h3 {
    font-family: "Inter";
    font-weight: 400;
    font-size: 1rem;
    color: #757575;
  }

  ul {
    padding-left: 1em;
    list-style: none;
  }

  li {
    margin: 0.75em 0;
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.9375rem;
    line-height: 1.6;
    position: relative;
  }

  ul li::before {
    content: "";
    width: 5px;
    height: 5px;
    background: #8f19e8;
    position: absolute;
    border-radius: 50%;
    left: -1em;
    top: 9px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.5em;
  }

  p {
    font-family: "Inter";
    font-weight: 700;
    font-size: 1rem;
    color: #a445ed;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 2em;
  font-family: "Inter";
  font-style: italic;
  font-weight: 700;
  font-size: 1.125rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 84%;
    height: 1px;
    background: #e9e9e9;
    top: 12px;
    left: 51px;
    // border: 10px solid blue;
  }
`;

export default NounSection;
