import SearchBar from "./SearchBar";
import WordBox from "./WordBox";
import NounSection from "./NounSection";
import VerbSection from "./VerbSection";
import SourceSection from "./SourceSection";

function Main({ wordData }) {
  return (
    <main>
      <SearchBar />
      {wordData && <WordBox wordData={wordData} />}
      {wordData && <NounSection wordData={wordData} />}
      {wordData && <VerbSection wordData={wordData} />}
      {wordData && <SourceSection wordData={wordData} />}
    </main>
  );
}

export default Main;
