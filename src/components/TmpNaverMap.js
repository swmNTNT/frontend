import React from "react";
import styled from "styled-components";

const TmpNaverMap = () => {
  return (
    <TmpNaverMapC
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      네이버 맵 공간...
    </TmpNaverMapC>
  );
};

export default TmpNaverMap;

const TmpNaverMapC = styled.div`
  width: 100vw;
  height: 30vh;
`;
