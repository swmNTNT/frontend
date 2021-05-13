import React, { useState } from "react";
import styled from "styled-components";
import { BottomSheet } from "react-spring-bottom-sheet";

const Bottom = () => {
  const [open, setOpen] = useState(false);

  return (
    <BottomContainer>
      {/* drawer deprecated */}
      {/* <SwipeableTemporaryDrawer /> */}
      <button onClick={() => setOpen((s) => !s)}>Open</button>
      <BottomSheet open={open}>My awesome content here</BottomSheet>
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
