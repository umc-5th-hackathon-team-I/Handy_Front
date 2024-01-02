import React, { useState } from "react";
import loginButton from "../img/login.svg";
import styled from "styled-components";
import PopupComponent from "../component/PopupComponent";

function LoginPage() {
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <Cover>
        <LoginZone>
          <img onClick={openPopup} src={loginButton} alt="로그인 버튼" />
        </LoginZone>
      </Cover>
      <PopupComponent visible={popupVisible} onClose={closePopup} />
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
