import React from "react";
import styled from "styled-components";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

const Bottom = () => {
  return (
    <div>
      <SwipeableTemporaryDrawer />
    </div>
  );
};

export default Bottom;

const BottomStyled = styled.div`
  width: 100%;
  height: 5vh;
  background-color: red;
`;
