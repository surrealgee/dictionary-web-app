import { useState, useEffect } from "react";
import styled from "styled-components";
import playIcon from "../assets/images/icon-play.svg";

function WordBox({ wordData }) {
  const { word, phonetics } = wordData;

  console.log(phonetics);

  const phoneticsText = phonetics
    .map((element) => element.text)
    .filter((element) => element);

  const phoneticsAudio = phonetics
    .map((element) => element.audio)
    .filter((element) => element);

  const audio = new Audio(phoneticsAudio[0]);

  function playAudio() {
    audio.play();
  }

  return (
    <StyledWordBox>
      <div className="info">
        <h1>{word}</h1>
        <p>{phoneticsText[0]}</p>
      </div>
      <img
        onClick={playAudio}
        src={playIcon}
        alt="an arrow pointing to the right"
      />
    </StyledWordBox>
  );
}

const StyledWordBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5em;

  .info h1 {
    font-family: "Inter";
    font-size: 2rem;
    color: #2d2d2d;
    margin: 0 0;
  }

  .info p {
    font-family: "Inter";
    font-size: 1.125rem;
    color: #a445ed;
    margin: 0.5em 0;
  }

  img {
    width: 48px;
  }
`;

export default WordBox;
