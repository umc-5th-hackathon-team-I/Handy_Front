import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import backgroundImg from "../img/letterboximg.svg";
import UserImg from "../img/userimg.svg";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;
function LetterBox() {
  return (
    <>
      <GlobalStyle />
      <Cover>
        <Box>
          <Title>편지함</Title>
          <LetterLay>
            <LetterTop>몇통(받아오기)의 편지가 도착함</LetterTop>

            <LetterMessage>
              <Ulay>
                <UserName>유저 이름(받아오기)</UserName>
                <Info>새로운 편지가 있습니다.</Info>
                <User>
                  <img src={UserImg} alt="유저 이미지" width={50} height={50} />
                </User>
              </Ulay>
            </LetterMessage>
          </LetterLay>
        </Box>
      </Cover>
    </>
  );
}
export default LetterBox;

const Cover = styled.div`
  background: url(${backgroundImg}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
`;

const LetterLay = styled.div`
  width: 329px;
  height: 600px;
  background-color: #ececec;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const LetterTop = styled.div`
  width: 329px;
  height: 80px;
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const Box = styled.div`
  padding-top: 200px;
  padding-left: 5%;
`;

const LetterMessage = styled.div`
  width: 300px;
  height: 70px;
  background-color: white;
  border-radius: 15px;
  margin-left: 15px;
  margin-top: 10px;
`;

const UserName = styled.div`
  font-size: 15px;
`;

const Info = styled.div`
  font-size: 12px;
  padding-top: 5px;
`;

const Ulay = styled.div`
  padding: 15px;
`;

const User = styled.div`
  float: right;
  margin-top: -45px;
`;

const Title = styled.div`
  font-size: 20px;
  color: white;
  padding-left: 40%;
  margin-top: -40px;
  padding-bottom: 20px;
`;
