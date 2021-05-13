import React, { Component } from "react";
import BottomModule from "../components/bottom/BottomModule";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import NaverMapC from "../components/NaverMapC";
import {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Marker,
  loadNavermapsScript,
} from "react-naver-maps"; // naver map 패키지 불러오기

import styled from "styled-components";

const navermaps = window.naver.maps;

function HomePage() {
  return (
    <AppContainer>
      <Header />
      <SearchBar />
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

const sample = [
  {
    lat: 37.554722,
    lng: 126.970833,
  },
  {
    lat: 37.553722,
    lng: 126.920833,
  },
  {
    lat: 37.553722,
    lng: 126.922833,
  },
];

function NaverMapAPI() {
  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
      style={{
        width: "100vw", // 네이버지도 가로 길이
        height: "100vh", // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={15} // 지도 초기 확대 배율
    >
      {sample.map((pos) => (
        <Marker
          position={new navermaps.LatLng(pos.lat, pos.lng)}
          onClick={() => {
            alert("here is naver!");
          }}
          icon="http://localhost:3000/marker.jpg"
          // 'http://localhost:3000/public/marker.png'
        />
      ))}
    </NaverMap>
  );
}

export default HomePage;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
