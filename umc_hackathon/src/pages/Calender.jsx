import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import userImg from "../img/userimg.svg";

import letter from "../img/letterimg.svg";
import send from "../img/send.svg";
import calenderImg from "../img/calenderboximg.svg";
function Calender() {
  useEffect(() => {
    const memberId = localStorage.getItem("memberId");

    axios
      .get("http://43.201.221.221:8080/calendar", {
        params: { memberId: memberId },
      })
      .then((response) => {
        // API 응답 처리
        console.log(response.data);
      })
      .catch((error) => {
        // 오류 처리
        console.error("Error sending GET request:", error);
      });
  }, []);

  return (
    <>
      <UserInfo>
        <UserName>이름님</UserName>
        <UserImage>
          <img src={userImg} alt="유저 이미지" />
        </UserImage>
      </UserInfo>

      <CalenderCover>
        <Cover>
          <LittleBox></LittleBox>
        </Cover>
      </CalenderCover>

      <FriendsZone>
        <img src={userImg} alt="친구들" />
      </FriendsZone>

      <Bottom>
        <Img>
          <img src={letter} alt="편지함" />
        </Img>
        <img src={send} alt="보내기" />
      </Bottom>
    </>
  );
}

export default Calender;

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
const UserInfo = styled.div`
  width: 360px;
  height: 100px;
  display: flex;
  margin-top: 20px;
`;

const UserName = styled.div`
  font-size: 20px;
  float: left;
  margin-left: 30px;
  margin-top: 20px;
`;

const UserImage = styled.div`
  padding-left: 180px;
`;

const CalenderCover = styled.div`
  text-align: center;
`;

const FriendsZone = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
`;

const Bottom = styled.div`
  position: fixed;
  top: 96%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: flex;
`;

const Img = styled.div`
  margin-right: 10px;
`;
