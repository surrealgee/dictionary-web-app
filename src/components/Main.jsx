import SearchBar from "./SearchBar";
import WordBox from "./WordBox";
import NounSection from "./NounSection";

function Main({ wordData }) {
  return (
    <main>
      <SearchBar />
      {wordData && <WordBox wordData={wordData} />}
      {wordData && <NounSection wordData={wordData} />}
    </main>
  );
}

export default Main;
