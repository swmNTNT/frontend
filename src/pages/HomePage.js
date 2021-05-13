import React, { useState } from "react";
import BottomModule from "../components/bottom/BottomModule";
import SearchBar from "../components/SearchBar";
import NaverMapC from "../components/NaverMapC";
import {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Marker,
  loadNavermapsScript,
} from "react-naver-maps"; // naver map 패키지 불러오기
import styled from "styled-components";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/SearchRounded";
import NaverMapAPI from "../components/NaverMapAPI";
import { ViewState, ViewTitle } from "../components/bottom/view";
import ViewNotification from "../components/bottom/view/ViewNotification";

const navermaps = window.naver.maps;

function HomePage() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [currentLocation, setCurrentLocation] = useState();

  const [viewState] = useState({
    header: {},
    title: {
      title_text: "알림 목록",
    },
    list: [
      {
        subTitle: "DC콤보 . DC차데모 . AC3상",
        title: "SW마에스트로센터...",
      },
      {
        subTitle: "DC콤보 . DC차데모 . AC3상",
        title: "어디어디 공간",
      },
    ],
  });
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpened(open);
  };

  const list = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{
        zIndex: 4000,
      }}
    > 
      <ViewTitle title_text={viewState.title.title_text} style={{
        marginTop: 24}}/>
      <ViewNotification notificationItem={viewState.list} />
    </div>
  );

  const getMyLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setCurrentLocation({ lat:position.coords.latitude, lng: position.coords.longitude })
      }, function(error) {
        console.error(error);
      }, {
        enableHighAccuracy: true
      });
    }
  }

  return (
    <>
      <SearchBar onNotificationDrawerButtonClicked={toggleDrawer(true)} />

      <RenderAfterNavermapsLoaded
        ncpClientId={"wdd5w8xqhv"} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapAPI currentLocation={currentLocation} />
      </RenderAfterNavermapsLoaded>
      <BottomModule onMyLocationClicked={getMyLocation}/>
      <Drawer
        anchor="right"
        open={drawerOpened}
        onBackdropClick={toggleDrawer(false)}
      >
        {list}
      </Drawer>
    </>
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



export default HomePage;
