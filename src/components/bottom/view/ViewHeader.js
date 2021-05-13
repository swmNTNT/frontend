import React from "react";
import styled from "styled-components";
// import InfoIcon from "@material-ui/icons/Info";
// import GpsFixedIcon from "@material-ui/icons/GpsFixed";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";
import {
  MyLocationRounded,
  ExitToAppRounded,
  InfoRounded,
} from "@material-ui/icons";

const ViewHeader = (props) => {
  const { onLoginClicked, onMyLocationClicked, onInfoClicked } = { ...props };

  return (
    <Wrapper {...props}>
      <div className="logo">
        <img
          className="logoImg"
          alt="logoImg"
          src={process.env.PUBLIC_URL + "images/logo.png"}
        ></img>
      </div>
      <div className="info">
        {/* <IconButton onClick={onLoginClicked}>
          <ExitToAppRounded htmlColor="#5F534A" />
        </IconButton> */}
        <IconButton onClick={onMyLocationClicked}>
          <MyLocationRounded htmlColor="#5F534A" />
        </IconButton>
        {/* <IconButton onClick={onInfoClicked}>
          <InfoRounded htmlColor="#5F534A" />
        </IconButton> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding-right: 18px;
  height: 60px;
  .logo {
    width: 111px;
    height: 41px;
    background: #f5f2e7 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000029;
    border-radius: 0px 100px 100px 0px;
    opacity: 1;
    display: flex;
    align-items: center;
    padding-left: 18px;
    .logoImg {
      width: 80px;
      height: 30px;
    }
  }
  .info {
    .icons {
      cursor: pointer;
    }
    .icons:not(:last-child) {
      margin-right: 27px;
    }
  }
`;

export default ViewHeader;
