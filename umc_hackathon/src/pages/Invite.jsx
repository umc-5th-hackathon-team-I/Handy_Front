import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import backgroundImg from "../img/inviteimg.svg";
import LoginInput from "../component/LoginInputReal";
import { useState } from "react";
import addFriendimg from "../img/addFriend.svg";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

function Invite() {
  const [idValue, setIdValue] = useState("");

  const handleIdChange = (newValue) => {
    setIdValue(newValue);
  };

  return (
    <>
      <GlobalStyle />
      <C>
        <Cover>
          <Lay>
            <Modal>
              <Title>친구 추가</Title>
              <LoginLay>
                <LoginInput
                  placeholder="닉네임을 입력해주세요"
                  type="text"
                  value={idValue}
                  onChange={handleIdChange}
                />
              </LoginLay>
              <AddImg>
                <img src={addFriendimg} alt="친구추가" />
              </AddImg>
            </Modal>
          </Lay>
        </Cover>
      </C>
    </>
  );
}

export default Invite;

const Cover = styled.div`
  width: 100%;
  height: 800px;
`;

const C = styled.div`
  background: url(${backgroundImg}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
`;

const Modal = styled.div`
  width: 320px;
  height: 250px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
`;

const AddImg = styled.div`
  padding-top: 50px;
`;

const LoginLay = styled.div`
  padding-top: 50px;
`;

const Title = styled.div`
  font-size: 20px;
  padding-top: 20px;
`;
const Lay = styled.div`
  padding-top: 50%;
  padding-left: 5%;
`;
