import styled from "styled-components";
import newWindow from "../assets/images/icon-new-window.svg";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function SourceSection({ wordData }) {
  const { darkTheme } = useContext(ThemeContext);
  const { sourceUrls } = wordData;

  return (
    <StyledSection isDark={darkTheme}>
      <p>Source</p>
      <a href={sourceUrls[0]}>
        {sourceUrls[0]}
        <img src={newWindow} alt="new window icon" />
      </a>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  margin-top: 1.5em;

  p,
  a {
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.875rem;
    text-decoration-line: underline;
    color: #757575;
    margin: 0;
  }

  a {
    margin-top: 0.5em;
    color: #2d2d2d;
    display: flex;
    gap: 0.5em;
    color: ${({ isDark }) => (isDark ? "#fff" : "2d2d2d")};
  }

  img {
    width: 12px;
    height: 12px;
  }
`;

export default SourceSection;
