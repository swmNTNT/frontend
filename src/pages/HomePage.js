import React, { useState, useEffect } from "react";
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

import { postApi } from "../api/evApi";
const navermaps = window.naver.maps;

function HomePage() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [currentLocation, setCurrentLocation] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await postApi.stationNearby({
        minLat: "37.5875896",
        maxLat: "37.6875296",
        minLng: "127.0674823",
        maxLng: "127.0771823",
      });
      console.log(res);
    };
    fetchData();
    return () => {};
  }, []);

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
