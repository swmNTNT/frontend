import React from "react";
import { NaverMap, Marker, Ellipse, Polygon } from "react-naver-maps"; // 패키지 불러오기

const min = { x: 126.5315, y: 33.3572421 };
const max = { x: 126.537, y: 33.3608829 };
const bounds = {
  north: max.y,
  east: max.x,
  south: min.y,
  west: min.x,
};

const NaverMapC = () => {
  const navermaps = window.naver.maps;

  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
      style={{
        width: "100%", // 네이버지도 가로 길이
        height: "85vh", // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율
    >
      <Polygon
        paths={[
          [
            new navermaps.LatLng(37.37544345085402, 127.11224555969238),
            new navermaps.LatLng(37.37230584065902, 127.10791110992432),
            new navermaps.LatLng(37.35975408751081, 127.10795402526855),
            new navermaps.LatLng(37.359924641705476, 127.11576461791992),
            new navermaps.LatLng(37.35931064479073, 127.12211608886719),
            new navermaps.LatLng(37.36043630196386, 127.12293148040771),
            new navermaps.LatLng(37.36354029942161, 127.12310314178465),
            new navermaps.LatLng(37.365211629488016, 127.12456226348876),
            new navermaps.LatLng(37.37544345085402, 127.11224555969238),
          ],
        ]}
        fillColor={"#ff0000"}
        fillOpacity={0.3}
        strokeColor={"#ff0000"}
        strokeOpacity={0.6}
        strokeWeight={3}
      />
      {/* <Circle
        center={{ x: 126.5343612, y: 33.3590625 }}
        radius={100}
        fillOpacity={1}
        fillColor={"#FF0000"}
        strokeColor={"red"}
        clickable={true} // click event를 다루기 위해서는 true로 설정되어야함.
        onClick={() => {
          alert("여기는 한라산 입니다.");
        }}
      /> */}
      <Ellipse
        bounds={bounds}
        fillOpacity={0.5}
        fillColor={"#FF0000"}
        strokeColor={"red"}
        clickable={true} // click event를 다루기 위해서는 true로 설정되어야함.
        onClick={() => {
          alert("여기는 한라산 입니다.");
        }}
      />
      <Marker
        key={1}
        position={new navermaps.LatLng(37.551229, 126.988205)}
        animation={2}
        onClick={() => {
          alert("여기는 N서울타워입니다.");
        }}
      />
    </NaverMap>
  );
};

export default NaverMapC;
