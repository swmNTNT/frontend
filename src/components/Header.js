import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

export default function StyledComponents({ ...props }) {
  return (
    <Header>
      <div className="wrapper">
        <div className="title">EVLINE</div>
        <div className="search">
          <SearchIcon />
        </div>
      </div>
    </Header>
  );
}

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  height: 64px;
  box-shadow: 0px 4px 4px #00000029;
  opacity: 0.9;
  z-index: 3000;

  .wrapper {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    padding: 0 16px;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 20px;
      font-weight: 800;
      cursor: pointer;
    }
    .search {
      cursor: pointer;
    }
  }
`;
