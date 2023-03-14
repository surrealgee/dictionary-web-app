import styled from "styled-components";
import newWindow from "../assets/images/icon-new-window.svg";

function SourceSection({ wordData }) {
  const { sourceUrls } = wordData;
  console.log(sourceUrls);
  return (
    <StyledSection>
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
    color: #2d2d2d;
    display: flex;
    gap: 0.5em;
  }

  img {
    width: 12px;
    height: 12px;
  }
`;

export default SourceSection;
