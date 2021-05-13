import React, { Component } from 'react'
import styled from "styled-components";
import { ViewNotificationItem } from "./index";

const ViewNotification = ({ notificationItem, ...props}) => {
    return (
        <Wrapper>
            <div>
                {notificationItem &&
                    notificationItem.map((e) => {
                        return <ViewNotificationItem subTitle={e.subTitle} title={e.title}/>
                    })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 0 16px;
  margin-top: 16px;

  transition: 0.2s opacity ease-in-out;
`;

export default ViewNotification;