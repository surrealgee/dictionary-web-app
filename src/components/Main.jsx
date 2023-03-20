import WordBox from "./WordBox";
import NounSection from "./NounSection";
import VerbSection from "./VerbSection";
import SourceSection from "./SourceSection";

function Main({ wordData }) {
  return (
    <main>
      <WordBox wordData={wordData} />
      <NounSection wordData={wordData} />
      <VerbSection wordData={wordData} />
      <SourceSection wordData={wordData} />
    </main>
  );
}

export default Main;
