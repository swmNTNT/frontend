import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BottomSheet } from "react-spring-bottom-sheet";

import ViewModule from "./ViewModule";

const Bottom = () => {
  const sheetRef = useRef();

  /* --- resize section ---  */
  // 가장 작게 축소
  const handle_snapToBottom = () =>
    sheetRef.current.snapTo(({ snapPoints }) => Math.min(...snapPoints));

  // 중간으로 크기 조정
  const handle_snapToMiddle = () =>
    sheetRef.current.snapTo(({ maxHeight }) => maxHeight / 2);

  // 가장 크게 크기 조정
  const handle_snapToTop = () =>
    sheetRef.current.snapTo(({ snapPoints }) => Math.max(...snapPoints));

  return (
    <BottomContainer>
      <BottomSheet
        ref={sheetRef}
        open
        // 초기 높이값
        defaultSnap={({ maxHeight }) => maxHeight / 2}
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight / 4,
          maxHeight * 0.6,
        ]}
        blocking={false}
      >
        <>
          <ViewModule />
        </>
      </BottomSheet>
    </BottomContainer>
  );
};

export default Bottom;

const BottomContainer = styled.div`
  /* position: fixed; */
  /* bottom: 0; */
  /* left: 0; */
  width: 100%;
  z-index: 3000;

  height: 60vh;
  background: #f8fafa 0% 0% no-repeat padding-box;
  box-shadow: 0px -8px 8px #0000001a;
  border-radius: 16px 16px 0px 0px;
  opacity: 0.95;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;
