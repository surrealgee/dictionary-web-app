import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setWordData(data[0]))
      .catch((err) => console.log(err));
  }, [searchTerm]);

  function handleChange(e) {
    const { value } = e.target;
    setWord(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (word === "") {
      setIsEmpty(true);
    } else {
      setSearchTerm(word);
      setWord("");
      setIsEmpty(false);
    }
    // if (word !== "") {
    //   setSearchTerm(word);
    // }
    // setWord("");
    // setIsEmpty(true);
  }

  return (
    <StyledApp>
      <StyledWrapper>
        <Header />
        <SearchBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          word={word}
          isEmpty={isEmpty}
        />
        {wordData && <Main wordData={wordData} />}
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
