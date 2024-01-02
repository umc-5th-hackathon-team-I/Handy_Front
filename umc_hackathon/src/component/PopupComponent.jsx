import React from "react";
import styled from "styled-components";
import LoginInput from "./LoginInputReal";
import { useState } from "react";
import logintrue from "../img/loginTrueBtn.svg";
import axios from "axios";

const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  width: 320px;
  height: 300px;
  border-radius: 20px;
`;

const CloseButton = styled.div`
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  margin-left: 46%;
  margin-top: 10px;
`;

const ModalCover = styled.div`
  margin-top: 50%;
  margin-left: 5%;
  text-align: center;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 10px;
`;

const PopupComponent = ({ visible, onClose }) => {
  const [idValue, setIdValue] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (newValue) => {
    setIdValue(newValue);
  };

  const handlePasswordChange = (newValue) => {
    setPassword(newValue);
  };

  const handleLogin = () => {
    axios
      .post("http://43.201.221.221:8080/login", {
        loginId: idValue,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data.result.memberId);
        localStorage.setItem("memberId", response.data.result.memberId);
        window.location.href = "/calender";
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);
      });
  };

  const LoginBtn = styled.div`
    padding-top: 50px;
    cursor: pointer;
  `;

  return (
    <div>
      <ModalWrapper visible={visible}>
        <ModalCover>
          <ModalContent>
            <Title>LOGIN</Title>
            <LoginInput
              placeholder="아이디를 입력해주세요"
              type="text"
              value={idValue}
              onChange={handleEmailChange}
            />
            <br />
            <br />
            <LoginInput
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <LoginBtn onClick={handleLogin}>
              <img src={logintrue} alt="활성화 버튼" />
            </LoginBtn>
          </ModalContent>
        </ModalCover>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalWrapper>
    </div>
  );
};

export default PopupComponent;
