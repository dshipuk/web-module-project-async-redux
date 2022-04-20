import React from "react";
import "./App.css";
import Posts from "./posts";

import styled from "styled-components"

const HeaderTextStyled = styled.h1`
  color: white;
`


function App() {
  return (
    <div className="App">
      <HeaderTextStyled>Async Redux Project</HeaderTextStyled>
      <Posts />
    </div>
  );
}

export default App;
