import React, { Component } from "react";
import BottomModule from "./components/bottom/BottomModule";
import Header from "./components/Header";
import NaverMapC from "./components/NaverMapC";
import { RenderAfterNavermapsLoaded, NaverMap, Marker, loadNavermapsScript } from 'react-naver-maps'; // naver map 패키지 불러오기
import map from "./map"
import styled from "styled-components";
import NaverMapAPI from "./components/NaverMapAPI";

const navermaps = window.naver.maps;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <RenderAfterNavermapsLoaded
          ncpClientId={"wdd5w8xqhv"} // 자신의 네이버 계정에서 발급받은 Client ID
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMapAPI />
        </RenderAfterNavermapsLoaded>
        <BottomModule />
      </AppContainer>
    );
  }
}

function addMarker(lat, lng) {
  return (
    <Marker
      position={new navermaps.LatLng(lat, lng)}
      animation={navermaps.Animation.BOUNCE}
      onClick={() => {
        alert("here is naver!");
      }}
    />
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
export default App;

