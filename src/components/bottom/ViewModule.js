import React from "react";
import styled from "styled-components";
import { ViewHeader, ViewList, ViewState, ViewTitle } from "./view";
// header

// state
// list moudle

const ViewModule = () => {
  // 주변에 충전소가 없는 경우

  // 주변에 충전소가 있는 경우

  // 특정 충전소를 누른 경우

  return (
    <ViewModuleStyeld>
      <ViewHeader />
      <ViewTitle />
      <ViewState />
      <ViewList />
    </ViewModuleStyeld>
  );
};

const ViewModuleStyeld = styled.div``;

export default ViewModule;
