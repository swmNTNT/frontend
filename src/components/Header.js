import React from "react";
// import { styled } from "@material-ui/core/styles";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

// const Header = styled(Button)({
//   position: "fixed",
//   top: 0,
//   padding: "0 30px",

//   background: "white",
//   width: "100%",
//   height: "64px",
//   boxShadow: "0px 4px 4px #00000029",
//   opacity: "0.5",
// });

const Header = styled(Button)`
  position: "fixed";
  top: 0;
  background: white;
  width: 100%;
  height: 64px;
  box-shadow: 0px 4px 4px #00000029;
  opacity: 0.5;

  .wrapper {
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    padding: 0 16px;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function StyledComponents({ ...props }) {
  return (
    <Header>
      <div className="wrapper">
        <div className="title">EVLINE</div>
        <div className="search">🔍</div>
      </div>
    </Header>
  );
}
