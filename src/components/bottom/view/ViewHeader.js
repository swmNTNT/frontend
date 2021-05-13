import React, {useState} from "react";
import styled from "styled-components";
import InfoIcon from "@material-ui/icons/Info";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const ViewHeader = ({ ...props }) => {
  const [currentLocation, setCurrentLocation] = useState();

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
        <GpsFixedIcon
          onClick={() => {
            getLocation(setCurrentLocation);
          }}
          className="icons"
          htmlColor="#5F534A"
        />
        <ExitToAppIcon
          onClick={() => {
            console.log("clicked");
          }}
          className="icons"
          htmlColor="#5F534A"
        />
        <InfoIcon
          onClick={() => {
            console.log("clicked");
          }}
          className="icons"
          htmlColor="#5F534A"
        />
      </div>
    </Wrapper>
  );
};

function getLocation(setCurrentLocation) {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      alert(position.coords.latitude + ', ' + position.coords.longitude);
      //setCurrentLocation( (prev)=>{return {latitude:position.coords.latitude,longitude: position.coords.longitude}} );
      setCurrentLocation({latitude:position.coords.latitude,longitude: position.coords.longitude})
    }, function(error) {
      console.error(error);
    }, {
      enableHighAccuracy: true
    });
  }
}

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
