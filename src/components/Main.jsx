import { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import WordBox from "./WordBox";

function Main({ wordData }) {
  //   console.log(wordData);
  return (
    <main>
      <SearchBar />
      <WordBox wordData={wordData} />
    </main>
  );
}

export default Main;
