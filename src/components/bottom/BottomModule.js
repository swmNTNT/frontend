import React, { useState, useRef, useEffect } from "react";
// import styled from "styled-components";
import { BottomSheet } from "react-spring-bottom-sheet";

import ViewModule from "./ViewModule";
import useWindowSize from "../../hooks/useWindowSize";

const Bottom = (props) => {
  const { onMyLocationClicked, onOpened, onClosed, stationsState } = {
    ...props,
  };
  const rootRef = useRef(null);
  const sheetRef = useRef();
  const [isBottom, setIsBottom] = useState(false);
  const size = useWindowSize();

  /* --- resize section ---  */
  // 가장 작게 축소
  // const handle_snapToBottom = () =>
  //   sheetRef.current.snapTo(({ snapPoints }) => Math.min(...snapPoints));

  // // 중간으로 크기 조정
  // const handle_snapToMiddle = () =>
  //   sheetRef.current.snapTo(({ maxHeight }) => maxHeight / 2);

  // // 가장 크게 크기 조정
  // const handle_snapToTop = () =>
  //   sheetRef.current.snapTo(({ snapPoints }) => Math.max(...snapPoints));

  useEffect(() => {
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
          requestAnimationFrame(() => {
            if (sheetRef.current.height < size.height / 3) {
              setIsBottom(true);
              onClosed();
            } else {
              setIsBottom(false);
              onOpened();
            }
          });
        }}
      >
        <>
          <ViewModule
            ref={rootRef}
            isBottom={isBottom}
            stationsState={stationsState}
            onMyLocationClicked={onMyLocationClicked}
          />
        </>
      </BottomSheet>
    </div>
  );
};

// const BottomSheetContainer = styled.div`
//   div {
//     z-index: 101 !important;
//   }
// `;

export default Bottom;
