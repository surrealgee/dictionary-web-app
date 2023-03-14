import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [word, setWord] = useState(0);

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/keyboard")
      .then((res) => res.json())
      .then((data) => setWord(data[0]))
      .catch((err) => console.log(err));
  }, []);

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
  padding-bottom: 2em;
`;

export default App;
