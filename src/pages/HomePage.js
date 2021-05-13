import React, { useState, useEffect } from "react";
import BottomModule from "../components/bottom/BottomModule";
import SearchBar from "../components/SearchBar";
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
import useStationNearby from "../hooks/useStationNearby";

const navermaps = window.naver.maps;

function HomePage() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [currentLocation, setCurrentLocation] = useState();
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(true);

  //
  const stationsState = useStationNearby(); // stationsState.stations
  // console.log(stationsState);

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
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <SearchIcon /> : <SearchIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <SearchIcon /> : <SearchIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        function(error) {
          console.error(error);
        },
        {
          enableHighAccuracy: true,
        }
      );
    }
  };

  return (
    <>
      <SearchBar onNotificationDrawerButtonClicked={toggleDrawer(true)} />

      <RenderAfterNavermapsLoaded
        ncpClientId={"wdd5w8xqhv"} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapAPI
          isBottomSheetOpened
          onMarkerClicked={(id) => {}}
          onMapMoved={(bound) => {}}
        />
      </RenderAfterNavermapsLoaded>

      {/* <div id="map" style={{ width: "100vw", height: "100vh" }} /> */}

      <BottomModule
        stationsState={stationsState}
        onOpened={() => console.log("opened")}
        onClosed={() => console.log("closed")}
        // onOpened={() => setIsBottomSheetOpened(true)}
        // onClosed={() => setIsBottomSheetOpened(false)}
      />
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

export default HomePage;
