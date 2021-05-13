import React from "react";
import styled from "styled-components";

const ViewTitle = () => {
  return (
    <Wrapper>
      <div>주변에 4개의 충전소</div>
    </Wrapper>
  );
};

export default ViewTitle;

const Wrapper = styled.div`
  padding: 0px 16px;

  margin-top: 10px;
  font-size: 22px;
  letter-spacing: 0px;
  color: #332922;
  opacity: 1;
`;
