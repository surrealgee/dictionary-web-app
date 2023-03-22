import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Main from "./components/Main";
import NotFound from "./components/NotFound";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const { darkTheme } = useContext(ThemeContext);

  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setWordData(data[0]))
      .catch((err) => console.error(err));
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
      setIsSubmited(true);
    }
  }

  return (
    <StyledApp isDark={darkTheme}>
      <StyledWrapper isDark={darkTheme}>
        <Header />
        <SearchBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          word={word}
          isEmpty={isEmpty}
        />
        {wordData === undefined && isSubmited && <NotFound />}
        {wordData && <Main wordData={wordData} />}
      </StyledWrapper>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-color: ${({ isDark }) => (isDark ? "#050505" : "#fff")};
  min-height: 100vh;
`;

const StyledWrapper = styled(StyledApp)`
  background-color: ${({ isDark }) => (isDark ? "#050505" : "#fff")};
  width: 90%;
  margin: 0 auto;
  padding-bottom: 2em;
`;

export default App;
