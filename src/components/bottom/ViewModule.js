import React, { useState } from "react";
import styled from "styled-components";
import { ViewHeader, ViewList, ViewState, ViewTitle } from "./view";
// header

// state
// list moudle

const ViewModule = (props) => {
  const {isBottom, onMyLocationClicked} = {...props};
  
  const [viewState] = useState({
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
      },
      {
        subTitle: "2개 중 급속 1개﹒완속 1개 사용 불가능",
        title: "코딩의 몽환의 숲",
      },
    ],
  });

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
