import React, { useState } from "react";
import BottomModule from "../components/bottom/BottomModule";
import SearchBar from "../components/SearchBar";
import { RenderAfterNavermapsLoaded } from "react-naver-maps"; // naver map 패키지 불러오기

import { Drawer } from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/SearchRounded";
import NaverMapAPI from "../components/NaverMapAPI";
import useStationNearby from "../hooks/useStationNearby";
import { ViewTitle } from "../components/bottom/view";
import ViewNotification from "../components/bottom/view/ViewNotification";

// const navermaps = window.naver.maps;

function HomePage() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    lat: null,
    lng: null,
  });
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(true);
  // console.log("currentLocation update", currentLocation);
  //

  const [stationNearby, setStationNearby] = useState({ lat: null, lng: null });
  const stationsState = useStationNearby(stationNearby.lat, stationNearby.lng); // stationsState.stations
  // console.log(stationsState);

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
      <ViewTitle
        title_text={viewState.title.title_text}
        style={{
          marginTop: 24,
        }}
      />
      <ViewNotification notificationItem={viewState.list} />
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
          isBottomSheetOpened={isBottomSheetOpened}
          currentLocation={currentLocation}
          onMarkerClicked={({ id }) => {
            console.log("id", id);
          }}
          onMapMoved={(bound) => {
            // console.log("bound", bound);
            setStationNearby({
              lat:
                (bound._max._lat +
                  bound._min._lat +
                  bound._ne._lat +
                  bound._sw._lat) /
                4,
              lng:
                (bound._max._lng +
                  bound._min._lng +
                  bound._ne._lng +
                  bound._sw._lng) /
                4,
            });
          }}
          stationsState={stationsState}
        />
      </RenderAfterNavermapsLoaded>

      {/* <div id="map" style={{ width: "100vw", height: "100vh" }} /> */}

      <BottomModule
        stationsState={stationsState}
        onMyLocationClicked={getMyLocation}
        onOpened={() => {
          setIsBottomSheetOpened(true);
        }}
        onClosed={() => {
          setIsBottomSheetOpened(false);
        }}
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
