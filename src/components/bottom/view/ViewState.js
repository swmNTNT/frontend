import React from "react";
import styled from "styled-components";

const ViewState = () => {
  return (
    <Wrapper>
      <div className="left">급속충전 9개 ﹒완속충전 10개</div>
      <div className="right">6개 사용 가능</div>
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
