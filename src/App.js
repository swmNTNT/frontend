import React, { Component } from "react";
import BottomModule from "./components/bottom/BottomModule";
import Header from "./components/Header";
import NaverMapC from "./components/NaverMapC";

import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <NaverMapC />
        <BottomModule />
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
