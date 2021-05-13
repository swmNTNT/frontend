import React, { Component, useState, useRef, useEffect } from "react";
import {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Marker,
  loadNavermapsScript,
} from "react-naver-maps"; // naver map 패키지 불러오기
import { withNavermaps } from "react-naver-maps/dist/hocs-018c38ad";

const navermaps = window.naver.maps;

const sample = [
  {
    id: 1,
    lat: 37.554722,
    lng: 126.970833,
  },
  {
    id: 2,
    lat: 37.353722,
    lng: 126.920833,
  },
  {
    id: 3,
    lat: 37.553722,
    lng: 126.922833,
  },
];

function NaverMapAPI(props) {
  const { isBottomSheetOpened, onMarkerClicked, onMapMoved } = { ...props };
  const [currentMarker, setCurrentMarker] = useState();
  const [mapRef, setMapRef] = useState();
  // const mapRef = useRef();

  const isSameMarker = (marker1, marker2) => {
    if (!marker1 || !marker2) return false;
    return marker1.lat === marker2.lat && marker1.lng === marker2.lng;
  };

  useEffect(() => {
    if (mapRef) {
      console.log(mapRef.map.center.x);

      navermaps.Event.addListener(mapRef.map, "idle", function() {
        onMapMoved(mapRef.getBounds());
      });
    }
  }, [mapRef]);

  const addMarker = (marker, isClicked) => {
    return (
      <Marker
        position={new navermaps.LatLng(marker.lat, marker.lng)}
        icon={
          isClicked
            ? "http://localhost:3000/marker_clicked.jpg"
            : "http://localhost:3000/marker_normal.png"
        }
        onClick={() => {
          mapRef.morph(
            isBottomSheetOpened
              ? new navermaps.LatLng(marker.lat - 0.003, marker.lng)
              : new navermaps.LatLng(marker.lat, marker.lng),
            16
          );
          setCurrentMarker(marker);
          // mapRef.panBy({ x: 0, y: 200 });
          onMarkerClicked(marker.id);
        }}
      />
    );
  };

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
        addMarker(pos, isSameMarker(pos, currentMarker), setCurrentMarker)
      )}
    </NaverMap>
  );
}

export default NaverMapAPI;
