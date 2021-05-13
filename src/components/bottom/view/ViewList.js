import React from "react";
import styled from "styled-components";
import { ViewListItem } from "./index";
const ViewList = () => {
  return (
    <Wrapper>
      <ul>
        {[{}].map((e) => {
          return <ViewListItem />;
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 16px;
  margin-top: 16px;
`;

export default ViewList;
