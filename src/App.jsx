import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [word, setWord] = useState({});

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/key")
      .then((res) => res.json())
      .then((data) => setWord(data[0]))
      .catch((err) => console.log(err));
  }, []);

  console.log(word);

  return (
    <StyledApp>
      <StyledWrapper>
        <Header />
        <Main wordData={word} />
      </StyledWrapper>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-color: #fff;
`;

const StyledWrapper = styled(StyledApp)`
  width: 90%;
  margin: 0 auto;
`;

export default App;
