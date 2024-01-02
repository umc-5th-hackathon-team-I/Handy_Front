import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import backgroundImg from "../img/inviteimg.svg";
import LoginInput from "../component/LoginInputReal";
import addFriendimg from "../img/joinimg.svg";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

function Join() {
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nickName, setNickName] = useState("");

  const handleIdChange = (newValue) => {
    setIdValue(newValue);
  };
  const handlePasswordChange = (newValue) => {
    setPasswordValue(newValue);
  };
  const handlenicknameChange = (newValue) => {
    setNickName(newValue);
  };

  const handleAddFriendClick = () => {
    const requestData = {
      loginId: idValue,
      nickname: nickName,
      password: passwordValue,
    };

    axios
      .post("https://handyteam.shop/signup", requestData)
      .then((response) => {
        console.log("Axios request successful:", response.data);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Axios request error:", error);
      });
  };

  return (
    <>
      <GlobalStyle />
      <C>
        <Cover>
          <Lay>
            <Modal>
              <Title>회원 가입</Title>
              <LoginLay>
                <LoginInput
                  placeholder="아이디를 입력해주세요"
                  type="text"
                  value={idValue}
                  onChange={handleIdChange}
                />
              </LoginLay>
              <LoginLay>
                <LoginInput
                  placeholder="비밀번호를 입력해주세요"
                  type="password"
                  value={passwordValue}
                  onChange={handlePasswordChange}
                />
              </LoginLay>
              <LoginLay>
                <LoginInput
                  placeholder="닉네임을 입력해주세요"
                  type="text"
                  value={nickName}
                  onChange={handlenicknameChange}
                />
              </LoginLay>
              <AddImg>
                <img
                  src={addFriendimg}
                  alt="친구추가"
                  onClick={handleAddFriendClick}
                />
              </AddImg>
            </Modal>
          </Lay>
        </Cover>
      </C>
    </>
  );
}

export default Join;

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
  height: 600px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
`;

const AddImg = styled.div`
  padding-top: 50px;
  cursor: pointer; /* Add cursor style to indicate it's clickable */
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
