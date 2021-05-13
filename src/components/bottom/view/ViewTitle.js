import React from "react";
import styled from "styled-components";

const ViewTitle = ({ title_text, ...props }) => {
  return (
    <Wrapper {...props}>
      <div>{title_text}</div>
    </Wrapper>
  );
};

export default ViewTitle;

const Wrapper = styled.div`
  padding: 0px 16px;

  margin-top: 10px;
  font-size: 22px;
  letter-spacing: 0px;
  color: #332922;
  opacity: 1;
  font-weight: 700;
`;
