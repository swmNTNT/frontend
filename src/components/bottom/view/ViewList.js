import React from "react";
import styled from "styled-components";
import { ViewListItem } from "./index";
const ViewList = ({ listItem, disappear, ...props }) => {
  return (
    <Wrapper disappear={disappear}>
      <div>
        {listItem &&
          listItem.map((e) => {
            return (
              <ViewListItem
                subTitle={e.subTitle}
                title={e.title}
                dist={e.dist}
              />
            );
          })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 16px;
  margin-top: 16px;

  opacity: ${(props) => (props.disappear ? 0 : 1)};
  transition: 0.2s opacity ease-in-out;
`;

export default ViewList;
