import React, { useState } from "react";
import styled from "styled-components";
import { BottomSheet } from "react-spring-bottom-sheet";

const BottomSheetContent = ({ onDismiss }) => {
  return (
    <BottomSheetContentStyeld>
      <p>
        Using <strong>onDismiss</strong> lets users close the sheet by swiping
        it down, tapping on the backdrop or by hitting <span>esc</span> on their
        keyboard.
      </p>
      <div>
        <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
        <p>The height adjustment is done automatically, it just works™!</p>
        <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
      </div>
      <button onClick={onDismiss} className="w-full">
        Dismiss
      </button>
    </BottomSheetContentStyeld>
  );
};

const BottomSheetContentStyeld = styled.div`
  z-index: 9999;
`;

const Bottom = () => {
  const [open, setOpen] = useState(false);
  function onDismiss() {
    setOpen(false);
  }

  return (
    <BottomContainer>
      <button onClick={() => setOpen((s) => !s)}>Open</button>
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        snapPoints={({ minHeight }) => minHeight}
        blocking={false}
      >
        <BottomSheetContent onDismiss={onDismiss} />
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
