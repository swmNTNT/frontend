import React from "react";
import styled from "styled-components";
import NotificationIcon from "@material-ui/icons/NotificationsActiveRounded";
import SearchIcon from "@material-ui/icons/SearchRounded";

export default function StyledComponents({ ...props }) {
  return (
    <SearchBar>
      <div className="wrapper">
        <SearchIcon className="search" />

        <div className="title">EVLINE</div>

        <NotificationIcon className="notifications" />
      </div>
    </SearchBar>
  );
}

const SearchBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #fcfbf7;
  height: 64px;
  margin: 16px;
  border-radius: 16px;
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
    .notifications {
      cursor: pointer;
    }
  }
`;
