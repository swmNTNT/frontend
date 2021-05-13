import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BottomSheet } from "react-spring-bottom-sheet";

import ViewModule from "./ViewModule";

const Bottom = () => {
  const rootRef = useRef(null);
  const sheetRef = useRef();
  const [isBottom, setIsBottom] = useState(false);



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

  useEffect(() => {
    // console.log("sheetRef.current", sheetRef.current);
    console.log("rootRef.current", rootRef.current);
    return () => {};
  }, []);

  return (
    <div className="bottomSheetRoot">
      <BottomSheet
        ref={sheetRef}
        open
        // 초기 높이값
        defaultSnap={({ maxHeight }) => maxHeight / 4}
        snapPoints={({ maxHeight }) => [
          // maxHeight - maxHeight / 10,
          maxHeight / 4,
          maxHeight * 0.6,
        ]}
        blocking={false}
        onSpringStart={() => {
          console.log(sheetRef.current);
          // console.log("Transition from:", sheetRef.current.height);
          requestAnimationFrame(() => {
            // console.log("Transition to:", sheetRef.current.height);
            if (sheetRef.current.height < 200) {
              setIsBottom(true);
            } else {
              setIsBottom(false);
            }
          });
        }}
      >
        <>
          <ViewModule ref={rootRef} isBottom={isBottom} />
        </>
      </BottomSheet>
    </div>
  );
};

export default Bottom;
