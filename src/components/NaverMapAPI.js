import React, { Component, useState, useEffect } from "react";
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

  useEffect(() => {
    const cleanLogos = async () => {
      let logo = document.querySelector(
        "#react-naver-map > div:nth-child(2) > div:nth-child(2)"
      );
      if (logo) logo.remove();
      logo = document.querySelector(
        "#react-naver-map > div:nth-child(2) > div"
      );
      if (logo) logo.remove();
      logo = document.querySelector("#react-naver-map > div:nth-child(3)");
      if (logo) logo.remove();
    };
    cleanLogos();
    const cl = setInterval(cleanLogos, 10);
    const loopend = setTimeout(() => {
      clearInterval(cl);
    }, 3000);
    return () => {
      clearInterval(cl);
      clearTimeout(loopend);
    };
  });

  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"}
      style={{ width: "100vw", height: "100vh" }}
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
