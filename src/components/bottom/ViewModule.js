import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ViewHeader, ViewList, ViewState, ViewTitle } from "./view";
import { computeDistance } from "../../utils/computeDistance";
// header

// state
// list moudle

const ViewModule = (props) => {
  const { isBottom, onMyLocationClicked, stationsState } = { ...props };

  const [viewState, setViewState] = useState({
    header: {},
    title: {
      title_text: "주변에 4개의 충전소",
    },
    state: {
      leftState: `급속충전 9개 ﹒완속충전 10개`,
      rightState: `6개 사용 가능`,
    },
    list: [
      {
        subTitle: "2개 중 급속 1개﹒완속 1개 사용 가능",
        title: "SW마에스트로센터 지하주차장",
        dist: "360m",
      },
      {
        subTitle: "2개 중 급속 1개﹒완속 1개 사용 불가능",
        title: "코딩의 몽환의 숲",
        dist: "360m",
      },
    ],
  });
  // console.log("stationsState", stationsState);

  // 현재 나의 위치가 바뀐 경우  - effect update
  useEffect(() => {
    if (
      stationsState &&
      !stationsState.error &&
      !stationsState.loading &&
      stationsState.stations
    ) {
      const stations = stationsState.stations;
      // console.log("stationsState.stations", stations);
      const count_nearbyStation = stations.length;

      const cntAllCharge = stations.filter((st) => st.chgerStat === "2").length;

      // console.log("cntAllCharge", cntAllCharge);
      const cntSlowCharge = stations.filter(
        (st) => st.chgerStat === "2" && st.type === "02"
      ).length;

      const tmp_list = stations.slice(0, 5).map((st) => {
        const dist = computeDistance(
          { latitude: 37.5875896, longitude: 127.0674823 },
          { latitude: Number(st.lat), longitude: Number(st.lng) }
        );
        return {
          // subTitle: `2개 중 급속 1개﹒완속 1개 사용 불가능`,
          subTitle: `${st.addr}`,
          title: `${st.stNm}`,
          dist: dist ? `${dist.toFixed(2)}Km` : "알 수 없음",
        };
      });

      setViewState((prev) => ({
        ...prev,
        title: {
          title_text: `주변에 ${count_nearbyStation}개의 충전소`,
        },
        state: {
          leftState: `급속충전 ${cntAllCharge -
            cntSlowCharge}개 ﹒완속충전 ${cntSlowCharge}개`,
          rightState: `${cntAllCharge}개 사용 가능`,
        },
        list: tmp_list,
      }));
    }
    return () => {};
  }, [stationsState]);

  // 주변에 충전소가 없는 경우

  // 주변에 충전소가 있는 경우

  // 특정 충전소를 누른 경우

  return (
    <ViewModuleStyeld {...props}>
      <ViewHeader onMyLocationClicked={onMyLocationClicked} />
      <ViewTitle title_text={viewState.title.title_text || "타이틀"} />
      <ViewState
        leftState={viewState.state.leftState}
        rightState={viewState.state.rightState}
      />
      <ViewList listItem={viewState.list} disappear={isBottom} />
    </ViewModuleStyeld>
  );
};

const ViewModuleStyeld = styled.div``;

export default ViewModule;
