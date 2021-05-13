import React from "react";
import styled from "styled-components";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";

const ViewListItem = ({ props }) => {
  return (
    <Wrapper>
      <li className="col">
        <div className="icon">
          <OfflineBoltIcon />
        </div>
        <div className="baseInfo">
          <div className="subTitle">2개 중 급속 1개﹒완속 1개 사용 가능</div>
          <div className="title">SW마에스트로센터 지하주차장</div>
        </div>
      </li>

      <li className="col">360m</li>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .col {
  }
`;

export default ViewListItem;
