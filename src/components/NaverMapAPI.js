import React, { Component, useState, useRef, useEffect } from "react";
import {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Marker,
  loadNavermapsScript,
} from "react-naver-maps"; // naver map 패키지 불러오기

const navermaps = window.naver.maps;

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

function NaverMapAPI(props) {
  const { position } = { ...props };
  const [currentMarker, setCurrentMarker] = useState();
  const [mapRef, setMapRef] = useState();
  // const mapRef = useRef();

  const isSameMarker = (marker1, marker2) => {
    if (!marker1 || !marker2) return false;
    return marker1.lat === marker2.lat && marker1.lng === marker2.lng;
  };

  useEffect(() => {
    if (mapRef) {
      console.log(mapRef);
      mapRef.setOptions({
        logoControl: false,
      });

      console.log(mapRef.getBounds());
    }
  }, [mapRef]);

  return (
    <NaverMap
      naverRef={(ref) => {
        setMapRef(ref);
      }}
      mapDivId={"maps-getting-started-uncontrolled"}
      style={{ width: "100vw", height: "100vh" }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
      defaultZoom={14}
      logoControl={false}
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

export default NaverMapAPI;
