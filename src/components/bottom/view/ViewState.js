import React from "react";
import styled from "styled-components";

const ViewState = ({ leftState, rightState, ...props }) => {
  return (
    <Wrapper {...props}>
      <div className="left">{leftState}</div>
      <div className="right">{rightState}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0px 16px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    font-size: 16px;
    color: #332922;
  }
  .right {
    font-size: 14px;
    color: #5f534a;
  }
`;

export default ViewState;
