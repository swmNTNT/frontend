import React, { Component } from "react";
import Bottom from "./components/bottom/Bottom";
import Header from "./components/Header";
import TmpNaverMap from "./components/TmpNaverMap";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TmpNaverMap />
        <Bottom />
      </div>
    );
  }
}

export default App;
