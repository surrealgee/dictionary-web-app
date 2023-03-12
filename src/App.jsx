import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <StyledApp>
      <StyledWrapper>
        <Header />
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
