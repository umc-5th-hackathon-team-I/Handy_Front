import React from "react";
import styled from "styled-components";
import calenderImg from "../img/calenderboximg.svg";

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
  background: url(${calenderImg}) no-repeat center center fixed;
  background-size: cover;

  border-radius: 15px;
  padding: 16px;
`;

const LittleBox = styled.div`
  width: 55px;
  height: 70px;
  background-color: #f27781;
  border-radius: 10px;
`;
