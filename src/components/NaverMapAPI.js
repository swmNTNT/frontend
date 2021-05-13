import React, { Component, useState } from "react";
import {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Marker,
  loadNavermapsScript,
} from "react-naver-maps"; // naver map 패키지 불러오기

const navermaps = window.naver.maps;

var prevMarker = null;
var currMarker = null;

const sample = [
  {
    lat: 37.554722,
    lng: 126.970833,
  },
  {
    lat: 37.353722,
    lng: 126.920833,
  },
  {
    lat: 37.553722,
    lng: 126.922833,
  },
];

function NaverMapAPI() {
  const [currentMarker, setCurrentMarker] = useState();

  const isSameMarker = (marker1, marker2) => {
    if (!marker1 || !marker2) return false;
    return marker1.lat === marker2.lat && marker1.lng === marker2.lng;
  };

  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"}
      style={{ width: "100vw", height: "105vh" }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
      defaultZoom={14}
    >
      {sample.map((pos) =>
        addMarker(
          pos.lat,
          pos.lng,
          isSameMarker(pos, currentMarker),
          setCurrentMarker
        )
      )}
    </NaverMap>
  );
}

function addMarker(lat, lng, isClicked, setCurrentMarker) {
  return (
    <Marker
      position={new navermaps.LatLng(lat, lng)}
      icon={
        isClicked
          ? "http://localhost:3000/marker_clicked.jpg"
          : "http://localhost:3000/marker_normal.png"
      }
      onClick={() => setCurrentMarker({ lat, lng })}
    />
  );
}

function clickMarkerHandler() {
  alert("click!");
}

export default NaverMapAPI;
