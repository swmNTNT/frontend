import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import NotificationIcon from "@material-ui/icons/NotificationsActiveRounded";
import SearchIcon from "@material-ui/icons/SearchRounded";

function SearchBar(props) {
  const { onNotificationDrawerButtonClicked } = { ...props };

  return (
    <SearchBarC>
      <div className="wrapper">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <textarea
          className="title"
          placeholder="충전소를 검색해보세요"
          cols="5"
          rows="1"
        ></textarea>

        <IconButton onClick={onNotificationDrawerButtonClicked}>
          <NotificationIcon />
        </IconButton>
      </div>
    </SearchBarC>
  );
}

const SearchBarC = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #fcfbf7;
  width: calc(100% - 24px);
  height: 56px;
  margin: 12px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px #00000029;
  opacity: 0.9;
  z-index: 1000;

  .wrapper {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 16px;
      width: 100%;
      align-text: middle;
      border: none;
      resize: none;
    }
  }
  textarea {
    background-color: #fcfbf7;
  }
  textarea:focus-visible {
    /* all: unset; */
    outline: none;
  }
`;

export default SearchBar;
