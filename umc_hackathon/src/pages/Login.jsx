import React, { useState } from "react";
import loginButton from "../img/login.svg";
import styled from "styled-components";
import PopupComponent from "../component/PopupComponent";
import backgroundImg from "../img/loginBack.svg";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

function LoginPage() {
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  const location = () => {
    window.location.href = "/join";
  };

  return (
    <>
      <GlobalStyle />
      <C>
        <Cover>
          <LoginZone>
            <img onClick={openPopup} src={loginButton} alt="로그인 버튼" />
            <Join onClick={location}>회원가입하기</Join>
          </LoginZone>
        </Cover>
        <PopupComponent visible={popupVisible} onClose={closePopup} />
      </C>
    </>
  );
}

export default LoginPage;

const LoginZone = styled.div`
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
`;

const C = styled.div`
  background: url(${backgroundImg}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
`;

const Join = styled.div`
  padding-left: 120px;
`;
