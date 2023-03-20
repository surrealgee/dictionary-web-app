import styled from "styled-components";

function VerbSection({ wordData }) {
  const { meanings } = wordData;

  const definitionsList = meanings[1].definitions
    .slice(0, 3)
    .map((element, index) => {
      return <li key={index}>{element.definition}</li>;
    });

  const examplesList = meanings[1].definitions
    .slice(0, 1)
    .map((element, index) => {
      return element.example;
    });

  return (
    <StyledSection>
      <SectionTitle>verb</SectionTitle>
      <h3>Meaning</h3>
      <ul>{definitionsList}</ul>
      {examplesList === "" && <p>"{examplesList}"</p>}
    </StyledSection>
  );
}

const StyledSection = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 2em;

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
    color: #2d2d2d;
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
    font-weight: 400;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: #757575;
    padding-left: 1em;
    margin: 0;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 2em;
  font-family: "Inter";
  font-style: italic;
  font-weight: 700;
  font-size: 1.125rem;
  color: #2d2d2d;
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

export default VerbSection;
