import React from "react";
import styled from "styled-components";

function CalenderBox() {
  return (
    <>
      <Cover>
        <LittleBox></LittleBox>
      </Cover>
    </>
  );
}

export default CalenderBox;

const Cover = styled.div`
  width: 320px;
  height: 512px;
  background-color: #cbcbcb;
  border-radius: 15px;
  padding: 16px;
`;

const LittleBox = styled.div`
  width: 55px;
  height: 70px;
  background-color: #ececec;
  border-radius: 10px;
`;
