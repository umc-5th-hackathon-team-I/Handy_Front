import React from "react";
import styled from "styled-components";
import LoginInput from "./LoginInput";
import { useState } from "react";

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
  padding: 20px;
  border-radius: 30px;
  width: 350px;
`;

const CloseButton = styled.button`
  top: 10px;
  right: 10px;
`;

const ModalCover = styled.div`
  margin-top: 50%;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
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

  const LoginBtn = styled.div``;

  return (
    <div>
      <ModalWrapper visible={visible}>
        <ModalCover>
          <ModalContent>
            <Title>로그인</Title>
            <LoginInput
              placeholder="아이디를 입력해주세요"
              type="text"
              value={idValue}
              onChange={handleEmailChange}
            />
            <br />
            <LoginInput
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <LoginBtn>로그인하기</LoginBtn>
            <CloseButton onClick={onClose}>닫기</CloseButton>
          </ModalContent>
        </ModalCover>
      </ModalWrapper>
    </div>
  );
};

export default PopupComponent;
