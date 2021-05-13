import React from "react";
import styled from "styled-components";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";

const ViewListItem = ({ subTitle, title, dist, ...props }) => {
  return (
    <Wrapper {...props}>
      <div className="contentCol">
        <div className="icon">
          <OfflineBoltIcon htmlColor="#E2C707" />
        </div>
        <div className="baseInfo">
          <div className="subTitle">{subTitle}</div>
          <div className="title">{title}</div>
        </div>
      </div>
      <div className="">{dist}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f2f0ea 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 0.9;
  min-height: 64px;
  margin-bottom: 8px;
  .contentCol {
    display: flex;
    .icon {
      margin-right: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .baseInfo {
      .subTitle {
        font-size: 10px;
      }
      .title {
        margin-top: 2px;
        font-size: 16px;
      }
    }
  }
`;

export default ViewListItem;
