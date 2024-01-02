import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import backgroundImg from "../img/rewardimg.svg";
import CrownImg from "../img/Crownimg.svg";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

function Reward() {
  return (
    <>
      <GlobalStyle />
      <Cover>
        <Box>
          <TitleImg>
            <img src={CrownImg} alt="왕관 이미지" />
          </TitleImg>
          <RewardLay>
            <RewardTop>
              <RewardMini>내가 지금까지 받았던 명예를 한눈에!</RewardMini>
              <br />
              <RewardTitle>명예의 전당</RewardTitle>
            </RewardTop>
          </RewardLay>
        </Box>
      </Cover>
    </>
  );
}

export default Reward;

const Cover = styled.div`
  background: url(${backgroundImg}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
`;

const RewardLay = styled.div`
  width: 329px;
  height: 600px;
  background-color: #ececec;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const RewardTop = styled.div`
  width: 329px;
  height: 80px;
  background-color: white;
  text-align: center;

  align-items: center;
  justify-content: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const Box = styled.div`
  padding-top: 200px;
  padding-left: 5%;
`;

const TitleImg = styled.div`
  padding-left: 140px;
`;

const RewardMini = styled.div`
  font-size: 9px;
  padding-top: 10px;
`;

const RewardTitle = styled.div``;
