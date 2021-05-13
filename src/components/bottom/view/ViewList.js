import React from "react";
import styled from "styled-components";
import { ViewListItem } from "./index";
const ViewList = ({ listItem, ...props }) => {
  return (
    <Wrapper>
      <div>
        {listItem &&
          listItem.map((e) => {
            return <ViewListItem subTitle={e.subTitle} title={e.title} />;
          })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 16px;
  margin-top: 16px;
`;

export default ViewList;
