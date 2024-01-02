import React from "react";
import styled from "styled-components";
import profile from "../img/Profile.svg";

const W = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  position: fixed;
  top: 40%;
  z-index: 10;
  margin-bottom: 100px;
`;

const WiteLetter = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  width: 329px;
  height: 544px;
  border-radius: 15px;
  padding-top: 100px;
  padding: 30px;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.315);
`;

const Pro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Name = styled.div`
  font-size: 18px;
  color: #333333;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Id = styled.div`
  font-size: 15px;
  color: #f27781;
  margin-bottom: 60px;
`;

const TextGray = styled.div`
  font-size: 18px;
  color: #ababab;
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 20px;
  color: #000000;
  font-weight: bold;
  background: none;
  border: none;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ButtonRed = styled.button`
  font-size: 20px;
  color: #f27781;
  font-weight: bold;
  background: none;
  border: none;
`;

const P = styled.button`
  float: right;
  color: #ac66f2;
  font-size: 18px;
  font-weight: bold;
  background: none;
  border: none;
`;

const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  border-top: 1px solid #ececec;
  padding: 20px;
`;

const Mine = (props) => {
  const myname = localStorage.getItem("name");
  const mymemberid = localStorage.getItem("memberId");

  const nage = () => {
    window.location.href = "/login";
  };

  const juri = () => {
    window.location.href = "/login";
  };

  const ilro = () => {
    window.location.href = "/reward";
  };
  return (
    <>
      <W>
        <Image src={profile} alt="msg" />
        <WiteLetter>
          <Pro>
            <Name>{myname}</Name>
            <Id>@{mymemberid}</Id>
            {/* <Name>{props.name}</Name>
                    <Id>@{props.id}</Id> */}
          </Pro>
          {/* <Label>
                <Text>알림 on/off</Text><P onClick={}>OFF</P>
            </Label>
            <Label>
                <Text>얻은 리워드 목록</Text>
            </Label>
            <Label>
                <Text>테마</Text><P>W</P>
            </Label> */}
          <Label>
            <TextGray>버전</TextGray>
            <P>beta</P>
          </Label>
          <Label>
            <TextGray onClick={ilro}>나의 리워드</TextGray>
          </Label>
          <hr />
          <Bottom>
            <Button onClick={nage}>로그아웃</Button>
            <ButtonRed onClick={juri}>회원탈퇴</ButtonRed>
          </Bottom>
        </WiteLetter>
      </W>
    </>
  );
};

export default Mine;
