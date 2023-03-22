import styled from "styled-components";
import emoji from "../assets/images/emoji.png";

function NotFound() {
  return (
    <SyledContainer>
      <img src={emoji} />
      <h2>No Definitions Found</h2>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </SyledContainer>
  );
}

const SyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8.25em;
  align-items: center;
  font-family: "Inter";

  img {
    align-self: center;
  }

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
    color: #2d2d2d;
    margin-top: 2.75em;
  }

  p {
    font-weight: 400;
    font-size: 1.125rem;
    text-align: center;
    color: #757575;
    margin: 0;
  }
`;

export default NotFound;
