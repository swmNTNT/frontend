import React, { useState, useRef, useEffect } from "react";
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
    <BottomSheetContainer>
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
        onAnimationIteration={() => {
          console.log("a");
        }}
        onSpringStart={() => {
          console.log("Transition from:", sheetRef.current.height);
          requestAnimationFrame(() =>
            console.log("Transition to:", sheetRef.current.height)
          );
        }}
        onSpringEnd={() =>
          console.log("Finished transition to:", sheetRef.current.height)
        }
      >
        <>
          <ViewModule />
        </>
      </BottomSheet>
    </BottomSheetContainer>
  );
};

const BottomSheetContainer = styled.div`
  div {
    z-index: 101 !important;
  }
`;

export default Bottom;
